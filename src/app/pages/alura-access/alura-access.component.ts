import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Access } from './access.model';
import { AluraStatus } from './alura-status.model';

@Component({
  selector: 'app-alura-access',
  templateUrl: './alura-access.component.html',
  styleUrls: ['./alura-access.component.scss']
})
export class AluraAccessComponent implements AfterViewInit {
  names = ['Teste 1', 'Teste 2', 'Teste 3'];
  DATA: Access[] = [
    { id: '1', name: 'Gabriel lorem ipsum', status: AluraStatus.Approved, date: new Date('2021-01-15') },
    { id: '2', name: 'Jureg lorem ipsum', status: AluraStatus.Canceled, date: new Date('2021-01-16') },
    { id: '3', name: 'Jonas lorem ipsum', status: AluraStatus.Waiting, date: new Date('2021-01-17') },
  ];
  displayedColumns = ['id', 'name', 'status', 'date', 'action'];
  dataSource = new MatTableDataSource(this.DATA);

  @ViewChild(MatSort) sort!: MatSort;

  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.searchForm = this.formBuilder.group({
      search: ['']
    });
   }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  mapIcon(status: AluraStatus) {
    if(status === AluraStatus.Approved) return 'check_circle';
    if(status === AluraStatus.Canceled) return 'cancel';
    if(status === AluraStatus.Waiting) return 'access_time';
    return '';
  }

}
