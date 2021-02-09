import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../../core/environment/environment.service';
import { AnnouncementPreview } from './announcements.model';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementsService {
  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService,
  ) {}

  getAll() {
    const url = this.environmentService.getApiUrl();
    return this.http.get<AnnouncementPreview[]>(url + '/announcements');
  }
}