import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { AnnouncementsComponent } from './components/announcements.component';

const routes: Routes = [
  {
    path: '',
    component: AnnouncementsComponent,
  },
  {
    path: ':id',
    component: AnnouncementComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementsRoutingModule { }