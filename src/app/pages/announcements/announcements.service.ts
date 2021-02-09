import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../../core/environment/environment.service';
import { UserService } from '../../core/user/user.service';
import { Announcement, AnnouncementPreview, Comment } from './announcements.model';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementsService {
  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService,
    private userService: UserService,
  ) {}

  getAll() {
    const url = this.environmentService.getApiUrl();
    return this.http.get<AnnouncementPreview[]>(url + '/announcements');
  }

  getById(announcementId: number) {
    const url = this.environmentService.getApiUrl();
    return this.http.get<Announcement>(url + '/announcements/' + announcementId);
  }

  getComments(announcementId: number) {
    const url = this.environmentService.getApiUrl();
    return this.http.get<Comment[]>(url + '/announcements/' + announcementId + '/comments'); 
  }

  comment(announcementId: number, comment: string) {
    const url = this.environmentService.getApiUrl();
    const author = this.userService.getUserName();
    const date = new Date();
    return this.http.post<Comment>(url + '/announcements/' + announcementId + '/comments', { comment, author, date, announcementId });
  }

  delete(announcementId: number) {
    const url = this.environmentService.getApiUrl();
    return this.http.delete(url + '/announcements/' + announcementId);
  }
}