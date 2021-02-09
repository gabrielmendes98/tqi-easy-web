import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AnnouncementsComponent } from './announcements.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowIfManagerModule } from '../../shared/directives/show-if-manager/show-if-manager.module';

@NgModule({
  declarations: [AnnouncementsComponent, AnnouncementComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    ShowIfManagerModule
  ],
})
export class AnnouncementsModule {}
