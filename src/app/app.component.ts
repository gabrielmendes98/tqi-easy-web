import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';

import { UserService } from './core/user/user.service';
import { User } from './core/user/user.model';
import { LoadingService } from './core/loading/loading.service';
import { SpinnerOverlayService } from './shared/components/spinner-overlay/spinner-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user$!: Observable<User | null>;
  themeClass!: string;

  constructor(
    private userService: UserService,
    private loadingService: LoadingService,
    private spinnerOverlayService: SpinnerOverlayService,
    private overlayContainer: OverlayContainer
  ) {}

  ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.add('light-theme');

    this.user$ = this.userService.getUser();
    this.loadingService.isNavigationPending$.subscribe((isLoading) => {
      isLoading ? this.spinnerOverlayService.showLoading() : this.spinnerOverlayService.hide();
    });
  }
}
