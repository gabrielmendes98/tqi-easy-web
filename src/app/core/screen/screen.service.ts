import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  private screenWidth$ = new BehaviorSubject<number>(window.innerWidth);
  private isMobile$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.screenWidth$.subscribe(width => {
      if(width <= 768) {
        this.isMobile$.next(true);
      } else {
        this.isMobile$.next(false);
      }
    })
  }

  screenWidth() {
    return this.screenWidth$;
  }

  isMobile() {
    return this.isMobile$.asObservable();
  }
}