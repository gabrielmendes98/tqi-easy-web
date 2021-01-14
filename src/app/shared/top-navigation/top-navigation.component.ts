import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/user/user.model';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  user!: User;

  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(user => {
      this.user = user!;
    });
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
  }

}
