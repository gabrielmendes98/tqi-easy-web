import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AluraAccessComponent } from './alura-access.component';
import { AluraAccessRoutingModule } from './alura-access-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { AccessTableComponent } from './access-table/access-table.component';

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
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AluraAccessModule { }
