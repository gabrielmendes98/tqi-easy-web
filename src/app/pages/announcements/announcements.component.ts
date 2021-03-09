import { Component, OnInit } from '@angular/core';
import { AnnouncementPreview } from './announcements.model';
import { AnnouncementsService } from './announcements.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent implements OnInit {
  announcements?: AnnouncementPreview[];

  constructor(private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    this.getAnnouncements();
  }

  getAnnouncements() {
    this.announcementsService.getAll().subscribe(announcements => {
      this.announcements = announcements;
    });
  }

  deleteAnnouncement(announcementId: number) {
    this.announcementsService.delete(announcementId).subscribe(() => this.getAnnouncements());
  }

  trackByFn(index: number, item: AnnouncementPreview)  {
    return item.id;
  }
}
