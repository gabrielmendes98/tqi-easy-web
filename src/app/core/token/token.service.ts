import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  hasToken() {
    return !!this.getToken();
  }

  getToken() {
    return window.localStorage.getItem('authToken');
  }

  setToken(token: string) {
    return window.localStorage.setItem('authToken', token);
  }

  removeToken() {
    window.localStorage.removeItem('authToken');
  }
}
