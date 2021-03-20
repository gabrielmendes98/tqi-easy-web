import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<Observable<Profile>> {
  constructor(private profileService: ProfileService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.profileService.getProfile();
  }
}
