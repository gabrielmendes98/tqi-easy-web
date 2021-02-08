import { TestBed } from '@angular/core/testing';

import { SpinnerOverlayInterceptor } from './spinner-overlay.interceptor';

describe('SpinnerOverlayInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SpinnerOverlayInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SpinnerOverlayInterceptor = TestBed.inject(SpinnerOverlayInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
