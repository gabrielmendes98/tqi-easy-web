import { Component, OnInit } from '@angular/core';
import { AnnouncementPreview } from './announcements.model';
import { AnnouncementsService } from './announcements.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent implements OnInit {
  announcements!: AnnouncementPreview[];

  constructor(private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    this.announcementsService.getAll().subscribe(announcements => {
      this.announcements = announcements;
    })
  }
}
