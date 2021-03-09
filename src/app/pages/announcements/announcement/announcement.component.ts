import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Announcement, Comment } from '../announcements.model';
import { AnnouncementsService } from '../announcements.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  id!: number;
  announcement!: Announcement;
  commentForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private announcementsService: AnnouncementsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params.id);

    this.announcementsService.getById(this.id).subscribe(announcement => {
      this.announcement = announcement;

      this.announcementsService.getComments(this.id).subscribe(comments => {
        this.announcement.comments = [...comments];
      });
    });

    this.commentForm = this.formBuilder.group({
      comment: ['']
    });
  }

  saveComment() {
    this.announcementsService
      .comment(this.id, this.commentForm.getRawValue().comment)
      .pipe(switchMap(() => this.announcementsService.getComments(this.id)))
      .subscribe(comments => {
        this.announcement.comments = [...comments];
        this.commentForm.reset();
      });
  }

  trackByFn(index: number, item: Comment) {
    return item.id;
  }
}
