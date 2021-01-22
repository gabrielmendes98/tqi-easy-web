import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/core/user/role.model';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss']
})
export class LeftNavigationComponent implements OnInit {
  isManager?: boolean;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const role = this.userService.getUserRole();
    this.isManager = role === Role.Manager;
  }
}
