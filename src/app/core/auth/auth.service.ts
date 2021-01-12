import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../environment/environment.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private environmentService: EnvironmentService) { }

  login(email: string, password: string) {
    const apiUrl = this.environmentService.getApiUrl()
    return this.http.post(apiUrl + '/login', { email, password });
  }
}
