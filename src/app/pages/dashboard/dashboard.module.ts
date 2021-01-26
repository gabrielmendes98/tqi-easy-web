import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { DashboardComponent } from './dashboard.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { InterviewCardComponent } from './interview-card/interview-card.component';
import { IconModule } from 'src/app/shared/icon/icon.module';



@NgModule({
  declarations: [
    DashboardComponent,
    InfoCardComponent,
    InterviewCardComponent,
  ],
  exports: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatIconModule,
    IconModule,
  ]
})
export class DashboardModule { }
