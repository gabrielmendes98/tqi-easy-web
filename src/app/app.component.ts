import { Component, OnInit } from '@angular/core';
import { UserService } from './core/user/user.service';
import { Observable } from 'rxjs';
import { User } from './core/user/user.model';
import { LoadingService } from './core/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user$!: Observable<User | null>;
  isSLoaderVisibile$!: Observable<boolean> ;

  constructor(private userService: UserService, private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
    this.isSLoaderVisibile$ = this.loadingService.isNavigationPending$;
  }
}
