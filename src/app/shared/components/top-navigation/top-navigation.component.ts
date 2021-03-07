import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/user/user.model';
import { UserService } from 'src/app/core/user/user.service';
import { THEME } from '../../../../assets/styles/themes.enum';
import { ThemeService } from '../../../core/theme/theme.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  user!: User;
  THEME = THEME;

  constructor(private userService: UserService, private themeService: ThemeService) { }
  
  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user!;
    });
  }

  logout() {
    this.userService.logout();
  }

  changeTheme(theme: string) {
    this.themeService.update(theme);
  }

  get currentTheme() {
    return this.themeService.getCurrentTheme();
  }

}
