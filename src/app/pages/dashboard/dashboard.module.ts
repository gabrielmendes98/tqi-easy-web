import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { InfoCardComponent } from './info-card/info-card.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InfoCardComponent,
  ],
  exports: [
    DashboardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
