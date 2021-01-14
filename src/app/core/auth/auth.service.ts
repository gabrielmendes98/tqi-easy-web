import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../environment/environment.service';
import { tap } from 'rxjs/operators'
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private environmentService: EnvironmentService, private userService: UserService) { }

  login(email: string, password: string) {
    const apiUrl = this.environmentService.getApiUrl()
    return this.http
      .post(apiUrl + '/login', { email, password })
      .pipe(tap(response => {
        const { accessToken } = response as any;
        this.userService.setToken(accessToken);
      }));
  }
}
