import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanLoad {
  constructor(private userService: UserService, private router: Router) { }
  
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this.userService.isLogged()) {
      this.router.navigate(['/login']);
      return false;
    }
    
    const role = this.userService.getUserRole();
    if(role && route.data?.roles?.indexOf(role) !== -1) {
      return true;
    }
    this.router.navigate(['/register-activity']);
    return false;
  }
}
