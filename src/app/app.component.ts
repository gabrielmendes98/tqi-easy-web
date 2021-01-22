import { Component, OnInit } from '@angular/core';
import { UserService } from './core/user/user.service';
import { Observable } from 'rxjs';
import { User } from './core/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user$!: Observable<User | null>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }
}
