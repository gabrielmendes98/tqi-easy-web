import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router, NavigationCancel } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanLoad {
  constructor(private userService: UserService, private router: Router) { }
  
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this.userService.isLogged()) {
      this.router.events.pipe(first(_ => _ instanceof NavigationCancel)).subscribe((event: any) => {
        this.redirectToLogin(event.url);
      });
      return false;
    }
    
    const role = this.userService.getUserRole();
    if(role && route.data?.roles?.indexOf(role) !== -1) {
      return true;
    }
    this.router.navigate(['/register-activity']);
    return false;
  }

  private redirectToLogin(fromUrl: string) {
    this.router.navigate(['/login'], { queryParams: { fromUrl } });
  }
}
