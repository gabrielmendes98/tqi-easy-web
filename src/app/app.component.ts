import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { UserService } from './core/user/user.service';
import { Observable } from 'rxjs';
import { User } from './core/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$!: Observable<User | null>;

  constructor(userService: UserService) {
    this.user$ = userService.getUser();
  }
}
