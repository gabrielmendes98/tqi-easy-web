import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UserService } from './core/user/user.service';
import { User } from './core/user/user.model';
import { LoadingService } from './core/loading/loading.service';
import { SpinnerOverlayService } from './shared/components/spinner-overlay/spinner-overlay.service';
import { ThemeService } from './core/theme/theme.service';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './core/sidenav/sidenav.service';
import { ScreenService } from './core/screen/screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user$!: Observable<User | null>;
  opened: boolean = false;
  isMobile: boolean = false;

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private userService: UserService,
    private loadingService: LoadingService,
    private spinnerOverlayService: SpinnerOverlayService,
    private themeService: ThemeService,
    private sidenavService: SidenavService,
    private screenService: ScreenService,
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target.innerWidth;
    this.screenService.screenWidth().next(width);
  }
  
  ngOnInit(): void {
    this.themeService.load();
    this.user$ = this.userService.getUser();

    this.sidenavService.opened().subscribe(opened => {
      this.opened = opened;
    });

    this.screenService.isMobile().subscribe(isMobile => {
      this.isMobile = isMobile;
    })

    this.loadingService.isNavigationPending$.subscribe((isLoading) => {
      isLoading ? this.spinnerOverlayService.showLoading() : this.spinnerOverlayService.hide();
    });
  }
}
