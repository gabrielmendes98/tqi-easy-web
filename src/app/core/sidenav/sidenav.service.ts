import { HostListener, Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private screenWidth = new BehaviorSubject<number>(window.innerWidth);
  private opened = new BehaviorSubject<boolean>(false);
  
  constructor() {
    this.screenWidth.subscribe(width => {
      if(width >= 768) {
        this.opened.next(true);
      } else {
        this.opened.next(false);
      }
    })
    // if(this._screenWidth.value >= 768) {
    //   this.opened.next(true);
    // } else {
    //   this.opened.next(false);
    // }
  }

  open() {
    return this.opened.next(true);
  }

  close() {
    return this.opened.next(false);
  }

  isOpened() {
    return this.opened.value;
  }

  toggle() {
    return this.opened.next(!this.opened.value);
  }

  sidenavOpened() {
    return this.opened.asObservable();
  }

  getScreenWidth() {
    return this.screenWidth;
  }
}
