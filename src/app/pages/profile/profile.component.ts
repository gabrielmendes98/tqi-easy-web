import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile!: Profile;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.profile = this.activatedRoute.snapshot.data.profile;
  }
}
