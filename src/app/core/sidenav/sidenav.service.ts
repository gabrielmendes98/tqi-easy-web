import { HostListener, Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';
import { ScreenService } from '../screen/screen.service';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private opened$ = new BehaviorSubject<boolean>(false);

  constructor(screenService: ScreenService) {
    screenService.isMobile().subscribe((isMobile) => {
      if (!isMobile) {
        return this.opened$.next(true);
      }

      return this.opened$.next(false);
    });
  }

  open() {
    return this.opened$.next(true);
  }

  close() {
    return this.opened$.next(false);
  }

  isOpened() {
    return this.opened$.value;
  }

  toggle() {
    return this.opened$.next(!this.opened$.value);
  }

  opened() {
    return this.opened$.asObservable();
  }
}
