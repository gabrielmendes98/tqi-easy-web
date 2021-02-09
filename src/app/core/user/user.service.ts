import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user.model';
import jwtDecode from 'jwt-decode';
import { Role } from './role.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);
  private userRole!: Role;
  private userId!: number; 
  private userName!: string;

  constructor(private tokenService: TokenService, private router: Router) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  getUserName() {
    return this.userName;
  }

  getUserRole() {
    return this.userRole;
  }

  getUserId() {
    return this.userId;
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const decoded: any = jwtDecode(token!);
    const user: User = decoded.payload;
    this.userRole = user.role;
    this.userId = user.id;
    this.userName = user.name;
    this.userSubject.next(user);
  }
}
