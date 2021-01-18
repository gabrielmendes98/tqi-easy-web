import { TestBed } from '@angular/core/testing';

import { AluraAccessService } from './alura-access.service';

describe('AluraAccessService', () => {
  let service: AluraAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AluraAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
