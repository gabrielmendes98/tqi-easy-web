import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AnnouncementsComponent } from './announcements.component';
import { AnnouncementComponent } from './announcement/announcement.component';



@NgModule({
  declarations: [
    AnnouncementsComponent,
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AnnouncementsModule { }
