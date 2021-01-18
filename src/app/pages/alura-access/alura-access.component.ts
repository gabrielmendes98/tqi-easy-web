import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Access } from './access.model';
import { AluraAccessService } from './alura-access.service';
import { AluraStatus } from './alura-status.model';

@Component({
  selector: 'app-alura-access',
  templateUrl: './alura-access.component.html',
  styleUrls: ['./alura-access.component.scss']
})
export class AluraAccessComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'name', 'status', 'date', 'action'];
  dataSource?: MatTableDataSource<Access>;
  searchForm!: FormGroup;
  
  names = ['teste 1', 'teste 2', 'teste 3'];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private formBuilder: FormBuilder, private aluraAccessService: AluraAccessService) { }

  ngOnInit(): void {
    this.getAll(1);

    this.searchForm = this.formBuilder.group({
      search: ['']
    });
  }

  ngAfterViewInit(): void {
    if(this.dataSource)
      this.dataSource.sort = this.sort;
  }

  mapIcon(status: AluraStatus) {
    if(status === AluraStatus.Approved) return 'check_circle';
    if(status === AluraStatus.Canceled) return 'cancel';
    if(status === AluraStatus.Waiting) return 'access_time';
    return '';
  }

  getAll(page: number) {
    this.aluraAccessService.getAll(page).subscribe(accesses => {
      this.dataSource = new MatTableDataSource(accesses);
    })
  }

}
