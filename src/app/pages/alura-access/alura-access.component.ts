import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Access } from './access.model';
import { AluraAccessService } from './alura-access.service';
import { UpdateStatusComponent } from './update-status/update-status.component';

@Component({
  selector: 'app-alura-access',
  templateUrl: './alura-access.component.html',
  styleUrls: ['./alura-access.component.scss']
})
export class AluraAccessComponent implements OnInit {
  accesses?: Access[];
  searchForm!: FormGroup;

  isLoading = true;
  errorMessage?: string;
  
  names = ['teste 1', 'teste 2', 'teste 3'];

  constructor(private formBuilder: FormBuilder, private aluraAccessService: AluraAccessService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll(1);

    this.searchForm = this.formBuilder.group({
      search: ['']
    });
  }

  getAll(page: number) {
    this.aluraAccessService.getAll(page).subscribe(accesses => {
      this.accesses = accesses;
      this.isLoading = false;
    },
    () => {
      this.errorMessage = 'Ocorreu um erro, tente novamente ou contate o suporte.';
      this.isLoading = false;
    }
    );
  }

  openDialog(access: Access) {
    let copy = {} as Access;
    Object.assign(copy, access);
    const dialogRef = this.dialog.open(UpdateStatusComponent, {
      width: '35%',
      data: copy
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        copy.status = result;
        this.aluraAccessService.updateAccess(copy).subscribe(result => {
          access.status = result.status;
        });
      }
    });
  }
}
