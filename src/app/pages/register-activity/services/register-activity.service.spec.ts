import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { RegisterActivityService } from './register-activity.service';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '../../../../environments/environment';

const mockData = {
  api: environment.apiUrl + '/activities',
  data: {
    projectId: 1,
    description: 'Dale',
    date: new Date(),
    timeWorked: '08:00',
    aditionalHours: '',
    nightHoursStart: '',
    nightHoursEnd: '',
    userId: 1,
  },
};

describe('RegisterActivityService', () => {
  let service: RegisterActivityService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [RegisterActivityService]
    });
    service = TestBed.inject(RegisterActivityService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#registerActivity should add a activity and return it', () => {
    service.registerActivity(mockData.data).subscribe(activity => {
      expect(activity).toEqual(mockData.data),
      fail
    });

    const req = httpController.expectOne(mockData.api);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(mockData.data);

    req.flush(mockData.data, { status: 201, statusText: 'Created' })
  });
});
