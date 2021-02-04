import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessOverlayComponent } from './success-overlay.component';

describe('SuccessOverlayComponent', () => {
  let component: SuccessOverlayComponent;
  let fixture: ComponentFixture<SuccessOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
