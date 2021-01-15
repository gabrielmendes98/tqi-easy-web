import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AluraAccessComponent } from './alura-access.component';
import { AluraAccessRoutingModule } from './alura-access-routing.module';

@NgModule({
  declarations: [
    AluraAccessComponent
  ],
  exports: [
    AluraAccessComponent
  ],
  imports: [
    CommonModule,
    AluraAccessRoutingModule
  ]
})
export class AluraAccessModule { }
