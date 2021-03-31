import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from '../environment/environment.service';
import { tap } from 'rxjs/operators'
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService,
    private userService: UserService,
  ) { }

  login(email: string, password: string) {
    const apiUrl = this.environmentService.getApiUrl();
    const headers = new HttpHeaders().set('skip-interceptor', 'true');
    return this.http
      .post<AuthResponse>(apiUrl + '/login', { email, password }, { headers })
      .pipe(tap(response => {
        const { accessToken, refreshToken } = response;
        this.userService.setToken(accessToken);
        this.userService.setRefreshToken(refreshToken)
      }));
  }

  // Using patch because my back-end is a json-server... In real applications should pass { password, newPassword } on put
  changePassword(password: string, newPassword: string) {
    const apiUrl = this.environmentService.getApiUrl();
    const userId = this.userService.getUserId();
    return this.http.patch(apiUrl + '/users/' + userId, { password: newPassword });
  }

  refreshToken() {
    const apiUrl = this.environmentService.getApiUrl();
    const headers = new HttpHeaders().set('skip-interceptor', 'true');
    const refreshToken = this.userService.getRefreshToken();
    return this.http
      .post<AuthResponse>(apiUrl + '/refresh-token', { refreshToken }, { headers })
      .pipe(tap(response => {
        const { accessToken, refreshToken } = response;
        this.userService.setToken(accessToken);
        this.userService.setRefreshToken(refreshToken)
      }));
  }
}

interface AuthResponse {
  accessToken: string; 
  refreshToken: string;
}