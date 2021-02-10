import { Component, OnInit } from '@angular/core';

import { UserService } from './core/user/user.service';
import { Observable } from 'rxjs';
import { User } from './core/user/user.model';
import { LoadingService } from './core/loading/loading.service';
import { SpinnerOverlayService } from './shared/components/spinner-overlay/spinner-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user$!: Observable<User | null>;

  constructor(private userService: UserService, private loadingService: LoadingService, private spinnerOverlayService: SpinnerOverlayService) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
    this.loadingService.isNavigationPending$.subscribe(isLoading => {
      console.log(isLoading)
      isLoading ? this.spinnerOverlayService.showLoading() : this.spinnerOverlayService.hide();
    });

  }
}
