import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Access } from '../access.model';
import { AluraStatus } from '../alura-status.model';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.scss']
})
export class UpdateStatusComponent { 

  statusList: string[];

  constructor(public dialogRef: MatDialogRef<UpdateStatusComponent>, @Inject(MAT_DIALOG_DATA) public access: Access) { 
    this.statusList = Object.values(AluraStatus);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
