import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from 'src/app/core/environment/environment.service';
import { UserService } from 'src/app/core/user/user.service';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient, private environmentService: EnvironmentService, private userService: UserService) { }

  saveProfile(profile: Profile) {
    const url = this.environmentService.getApiUrl();
    const id = this.userService.getUserId();
    return this.http.put<Profile>(url + '/profile/' + id, profile);
  }

  getProfile() {
    const url = this.environmentService.getApiUrl();
    const id = this.userService.getUserId();
    return this.http.get<Profile>(url + '/profile/' + id);
  }
}
