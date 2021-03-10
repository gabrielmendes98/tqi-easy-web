import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Announcement, Comment } from '../../models/announcements.model';
import { AnnouncementsService } from '../../services/announcements.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  id!: number;
  announcement!: Announcement;
  comments: Comment[] = [];
  commentForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private announcementsService: AnnouncementsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAnnouncementId();
    this.getAnnouncement();
    this.getComments();
    this.createFormGroup();
  }

  createFormGroup() {
    this.commentForm = this.formBuilder.group({
      comment: ['']
    });
  }

  getComments() {
    this.announcementsService.getComments(this.id).subscribe(comments => {
      this.comments = comments;
    });
  }

  getAnnouncement() {
    this.announcementsService.getById(this.id).subscribe(announcement => {
      this.announcement = announcement;
    });
  }

  getAnnouncementId() {
    this.id = parseInt(this.activatedRoute.snapshot.params.id);
  }

  saveComment() {
    this.announcementsService
      .comment(this.id, this.commentForm.getRawValue().comment)
      .pipe(switchMap(() => this.announcementsService.getComments(this.id)))
      .subscribe(comments => {
        this.comments = [...comments];
        this.commentForm.reset();
      });
  }

  trackByFn(index: number, item: Comment) {
    return item.id;
  }
}
