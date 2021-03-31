import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ProjectService } from './project.service';
import { environment } from '../../../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../../core/user/user.service';

const mockData = {
  api: environment.apiUrl + '/users/' + 1 + '/projects',
  data: [
    {
      id: 1,
      name: 'Test Project'
    },
    {
      id: 2,
      name: 'Test Project 2'
    }
  ]
}

const userServiceMock = {
  getUserId: () => 1,
}

describe('ProjectService', () => {
  let service: ProjectService;
  let httpController: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ProjectService, { provide: UserService, useValue: userServiceMock }]
    }).compileComponents();
    service = TestBed.inject(ProjectService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getAll should return all projects that a user is part of', (done) => {

    service.getAll().subscribe(projects => {
      expect(projects[0].id).toEqual(1);
      expect(projects[1].id).toEqual(2);
      done();
    });

    httpController.expectOne(mockData.api).flush(mockData.data);

  })
});
