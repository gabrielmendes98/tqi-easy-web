import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { DashboardComponent } from './components/dashboard.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { InterviewCardComponent } from './components/interview-card/interview-card.component';
import { IconModule } from '../../shared/components/icon/icon.module';

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
