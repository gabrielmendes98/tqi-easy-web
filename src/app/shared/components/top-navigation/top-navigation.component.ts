import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/user.model';
import { UserService } from 'src/app/core/user/user.service';
import { THEME } from '../../../../assets/styles/themes.enum';
import { SidenavService } from '../../../core/sidenav/sidenav.service';
import { ThemeService } from '../../../core/theme/theme.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
  user!: User;
  showMenuButton!: boolean;
  THEME = THEME;

  constructor(private userService: UserService, private themeService: ThemeService, private sidenavService: SidenavService) { }
  
  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user!;
    });

    this.sidenavService.getScreenWidth().subscribe(width => {
      this.showMenuButton = width < 768;
    })
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

  toggleSidenav() {
    this.sidenavService.toggle();
  }

}
