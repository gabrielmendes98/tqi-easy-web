import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../../../core/environment/environment.service';
import { UserService } from '../../../core/user/user.service';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, 
              private environmentService: EnvironmentService, 
              private userService: UserService) { }

  getAll() {
    const url = this.environmentService.getApiUrl();
    const id = this.userService.getUserId();
    return this.http.get<Project[]>(url + '/users/' + id + '/projects');
  }
}
