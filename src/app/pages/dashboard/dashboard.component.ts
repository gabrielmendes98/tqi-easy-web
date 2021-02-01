import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardInfo } from './models/dashboard-info.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardInfo!: DashboardInfo;
  icons = ['star', 'person', 'menu_book'];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dashboardInfo = this.activatedRoute.snapshot.data.dashboardInfo;
  }

}
