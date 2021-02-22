import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  hasToken(key: string) {
    return !!this.getToken(key);
  }

  getToken(key: string) {
    return window.localStorage.getItem(key);
  }

  setToken(key: string, token: string) {
    return window.localStorage.setItem(key, token);
  }

  removeToken(key: string) {
    window.localStorage.removeItem(key);
  }
}
