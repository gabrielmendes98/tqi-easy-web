import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Access } from '../models/access.model';
import { AluraStatus } from '../models/alura-status.model';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.scss']
})
export class UpdateStatusComponent implements OnInit { 

  statusList!: string[];

  constructor(public dialogRef: MatDialogRef<UpdateStatusComponent>, @Inject(MAT_DIALOG_DATA) public access: Access) { }
  
  ngOnInit(): void {
    this.statusList = Object.values(AluraStatus);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
