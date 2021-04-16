import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';

import { ProfileResolver } from './profile.resolver';
import { ProfileService } from './profile.service';
import { mockProfile } from '../mock/profile.mock';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

let mockRouterStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);

describe('ProfileResolver', () => {
  let resolver: ProfileResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
    });
    resolver = TestBed.inject(ProfileResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('#resolve should return profile data', () => {
    const route = new ActivatedRouteSnapshot();
    const profileService = TestBed.inject(ProfileService);
    spyOn(profileService, 'getProfile').and.returnValue(of(mockProfile));
    resolver.resolve(route, mockRouterStateSnapshot).subscribe((profile) => expect(profile).toEqual(mockProfile), fail);
  });
});
