import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluraAccessComponent } from './alura-access.component';

describe('AluraAccessComponent', () => {
  let component: AluraAccessComponent;
  let fixture: ComponentFixture<AluraAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluraAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AluraAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
