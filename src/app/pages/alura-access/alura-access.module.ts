import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AluraAccessComponent } from './alura-access.component';
import { AluraAccessRoutingModule } from './alura-access-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { AccessTableComponent } from './access-table/access-table.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AluraAccessComponent,
    UpdateStatusComponent,
    AccessTableComponent
  ],
  exports: [
    AluraAccessComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AluraAccessRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule
  ]
})
export class AluraAccessModule { }
