import { Injectable } from '@angular/core';
import { Router, Event as RouterEvent, ResolveStart, ResolveEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, distinctUntilChanged, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private router: Router) { }

  isNavigationPending$: Observable<boolean> = this.router.events.pipe(
    filter((event: RouterEvent) => this.isConsideredEvent(event)),
    map((event: RouterEvent) => this.isNavigationStart(event)),
    distinctUntilChanged(),
  );

  private isConsideredEvent(event: RouterEvent): boolean {
    return this.isNavigationStart(event) || this.isNavigationEnd(event);
  }

  private isNavigationStart(event: RouterEvent): boolean {
    return event instanceof ResolveStart;
  }

  private isNavigationEnd(event: RouterEvent): boolean {
    return event instanceof ResolveEnd;
  }
}