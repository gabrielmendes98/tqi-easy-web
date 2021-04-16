import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '../../../../environments/environment';
import { UserService } from '../../../core/user/user.service';
import { ProjectService } from '../../register-activity/services/project.service';
import { ProfileService } from './profile.service';
import { mockProfile } from '../mock/profile.mock';
import { HttpErrorResponse } from '@angular/common/http';

const mockData = {
  api: environment.apiUrl + '/profile/' + 1,
  data: mockProfile,
};

const userServiceMock = {
  getUserId: () => 1,
};

describe('ProfileService', () => {
  let service: ProfileService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ProjectService, { provide: UserService, useValue: userServiceMock }],
    }).compileComponents();
    service = TestBed.inject(ProfileService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getProfile should return profile', () => {
    service.getProfile().subscribe((profile) => expect(profile).toEqual(mockData.data, 'should return profile'), fail);

    const req = httpController.expectOne(mockData.api);
    expect(req.request.method).toEqual('GET');

    req.flush(mockData.data);
  });

  it('#getProfile should return 404 error when profile not found', (done) => {
    service.getProfile().subscribe(
      (profile) => {
        fail('The request is supposed to throw an error');
      },
      (error: HttpErrorResponse) => {
        expect(error.statusText).toEqual('Not Found');
        done();
      }
    );

    const req = httpController.expectOne(mockData.api);
    req.flush({}, { status: 404, statusText: 'Not Found' });
  });

  it('#saveProfile should add a profile and return it', () => {
    service.saveProfile(mockData.data).subscribe((profile) => expect(profile).toEqual(profile), fail);

    const req = httpController.expectOne(mockData.api);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(mockData.data);

    req.flush(mockData.data, { status: 200, statusText: 'OK' });
  });
});
