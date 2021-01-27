import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from 'src/app/core/environment/environment.service';
import { UserService } from 'src/app/core/user/user.service';
import { Project } from './project.model';

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
