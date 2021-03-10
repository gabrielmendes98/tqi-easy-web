import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router,
  NavigationCancel,
} from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isLogged = this.userService.isLogged();
    if (isLogged) {
      if (route.routeConfig?.path === 'login') return false;
      return true;
    } else if (route.routeConfig?.path === 'login') {
      return true;
    }
    this.redirectToLogin(state.url)
    return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLogged = this.userService.isLogged();
    if(isLogged) {
      return true;
    }

    this.router.events.pipe(first(_ => _ instanceof NavigationCancel)).subscribe((event: any) => {
      this.redirectToLogin(event.url);
    });

    return false;
  }

  private redirectToLogin(fromUrl: string) {
    this.router.navigate(['/login'], { queryParams: { fromUrl } });
  }
}
