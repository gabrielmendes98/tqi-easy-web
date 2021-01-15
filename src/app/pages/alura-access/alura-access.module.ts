import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AluraAccessComponent } from './alura-access.component';
import { AluraAccessRoutingModule } from './alura-access-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AluraAccessComponent
  ],
  exports: [
    AluraAccessComponent
  ],
  imports: [
    CommonModule,
    AluraAccessRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AluraAccessModule { }
