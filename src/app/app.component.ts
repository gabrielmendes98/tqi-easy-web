import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNavigation = true;

  constructor(location: Location) {
    this.showNavigation = location.path() !== '/login';
  }
}
