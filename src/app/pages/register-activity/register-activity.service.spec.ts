import { TestBed } from '@angular/core/testing';

import { RegisterActivityService } from './register-activity.service';

describe('RegisterActivityService', () => {
  let service: RegisterActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
