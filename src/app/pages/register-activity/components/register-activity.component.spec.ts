import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { UserService } from '../../../core/user/user.service';
import { requiredIfChecked } from '../../../shared/validators/conditional-required.validator';
import { Activity } from '../models/activity.model';
import { Project } from '../models/project.model';
import { RegisterActivityModule } from '../register-activity.module';
import { ProjectService } from '../services/project.service';
import { RegisterActivityService } from '../services/register-activity.service';

import { RegisterActivityComponent } from './register-activity.component';

describe('RegisterActivityComponent', () => {
  let component: RegisterActivityComponent;
  let fixture: ComponentFixture<RegisterActivityComponent>;
  let projectService: ProjectService;

  const projectsMock: Project[] = [
    {
      id: 1,
      name: 'Test Project',
    },
    {
      id: 2,
      name: 'Test Project 2',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RegisterActivityModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterActivityComponent);
    component = fixture.componentInstance;
    projectService = TestBed.inject(ProjectService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getProjects should get all projects and set projects', () => {
    spyOn(projectService, 'getAll').and.returnValue(of(projectsMock));
    component.getProjects();
    expect(component.projects).toEqual(projectsMock);
  });

  it('#getProjects should set loading to false if error', () => {
    spyOn(projectService, 'getAll').and.returnValue(throwError({ status: 404 }));
    component.getProjects();
    expect(component.loadingProjects).toEqual(false);
  });

  it('#createFormGroup should create a FormGroup and set registerActivityForm', () => {
    component.createFormGroup();
    expect(component.registerActivityForm instanceof FormGroup).toBe(true);
  });

  it('#updateAditionalHoursField should show aditional hours field and validate form', () => {
    component.registerActivityForm = new FormGroup({
      aditionalHoursCheck: new FormControl(false),
      aditionalHours: new FormControl('', requiredIfChecked('aditionalHoursCheck')),
    });
    const spyAditionalHours = spyOn(
      component.registerActivityForm.get('aditionalHours')!,
      'updateValueAndValidity'
    ).and.callThrough();
    component.updateAditionalHoursField();
    component.registerActivityForm.patchValue({ aditionalHoursCheck: true });
    expect(component.showAditionalHoursField).toBe(true);
    expect(component.registerActivityForm.valid).toBe(false);
    expect(spyAditionalHours).toHaveBeenCalled();
  });

  it('#updateAditionalHoursField should not call updateValueAndValidity when not have aditionalHours field', () => {
    component.registerActivityForm = new FormGroup({
      aditionalHoursCheck: new FormControl(false),
    });
    const aditionalHours = component.registerActivityForm.get('aditionalHours');
    component.updateAditionalHoursField();
    component.registerActivityForm.patchValue({ aditionalHoursCheck: true });
    expect(aditionalHours).toEqual(null);
  });

  it('#updateAditionalHoursField should not subscribe if aditionalHoursCheck is not created', () => {
    component.registerActivityForm = new FormGroup({ });
    const aditionalHoursCheck = component.registerActivityForm.get('aditionalHoursCheck');
    component.updateAditionalHoursField();
    expect(aditionalHoursCheck).toEqual(null);
  });

  it('#updateNightHoursField should show night hours field and validate form', () => {
    component.registerActivityForm = new FormGroup({
      nightHoursCheck: new FormControl(false),
      nightHoursStart: new FormControl('', requiredIfChecked('nightHoursCheck')),
      nightHoursEnd: new FormControl('', requiredIfChecked('nightHoursCheck')),
    });

    const spyNightHoursStart = spyOn(
      component.registerActivityForm.get('nightHoursStart')!,
      'updateValueAndValidity'
    ).and.callThrough();
    const spyNightHoursEnd = spyOn(
      component.registerActivityForm.get('nightHoursEnd')!,
      'updateValueAndValidity'
    ).and.callThrough();

    component.updateNightHoursField();
    component.registerActivityForm.patchValue({ nightHoursCheck: true });
    expect(component.showNightHoursField).toBe(true);
    expect(component.registerActivityForm.valid).toBe(false);
    expect(spyNightHoursStart).toHaveBeenCalled();
    expect(spyNightHoursEnd).toHaveBeenCalled();
  });

  it('#updateNightHoursField should not call updateValueAndValidity when not have nightHours fields', () => {
    component.registerActivityForm = new FormGroup({
      nightHoursCheck: new FormControl(false),
    });

    component.updateNightHoursField();

    const nightHoursStart = component.registerActivityForm.get('nightHoursStart');
    const nightHoursEnd = component.registerActivityForm.get('nightHoursEnd');

    component.registerActivityForm.patchValue({ nightHoursCheck: true });

    expect(nightHoursStart).toEqual(null);
    expect(nightHoursEnd).toEqual(null);
  });

  it('#updateNightHoursField should not subscribe when nightHoursCheck is not created', () => {
    component.registerActivityForm = new FormGroup({
    });
    component.updateNightHoursField();
    const nightHoursCheck = component.registerActivityForm.get('nightHoursCheck');
    expect(nightHoursCheck).toEqual(null);
  });

  it('#updateCheckboxes should call updateAditionalHoursField and updateNightHoursField', () => {
    const updateAditionalHoursFieldSpy = spyOn(component, 'updateAditionalHoursField');
    const updateNightHoursFieldSpy = spyOn(component, 'updateNightHoursField');
    component.updateCheckboxes();
    expect(updateAditionalHoursFieldSpy).toHaveBeenCalled();
    expect(updateNightHoursFieldSpy).toHaveBeenCalled();
  });

  it('#registerActivity should call #registerActivityService.registerActivity with correct value', () => {
    const fb = new FormBuilder();
    component.registerActivityForm = fb.group({
      projectId: [1],
      description: ['test project'],
      date: [new Date()],
      timeWorked: ['08:00'],
      aditionalHoursCheck: [false],
      aditionalHours: [''],
      nightHoursCheck: [false],
      nightHoursStart: [''],
      nightHoursEnd: [''],
    });

    const mockUserId = 1;
    const userService = TestBed.inject(UserService);
    spyOn(userService, 'getUserId').and.returnValue(mockUserId);

    const mockActivity: Activity = {
      projectId: component.registerActivityForm.get('projectId')?.value,
      date: component.registerActivityForm.get('date')?.value,
      description: component.registerActivityForm.get('description')?.value,
      timeWorked: component.registerActivityForm.get('timeWorked')?.value,
      userId: mockUserId,
      aditionalHours: component.registerActivityForm.get('aditionalHours')?.value,
      nightHoursEnd: component.registerActivityForm.get('nightHoursEnd')?.value,
      nightHoursStart: component.registerActivityForm.get('nightHoursStart')?.value,
    };

    const registerActivityService = TestBed.inject(RegisterActivityService);
    const spyRegisterServiceRegisterActivity = spyOn(registerActivityService, 'registerActivity').and.returnValue(
      of(mockActivity)
    );

    component.registerActivity();

    expect(spyRegisterServiceRegisterActivity).toHaveBeenCalledWith(mockActivity);
  });

  it('#registerActivity should not call #registerActivityService.registerActivity when form is invalid', () => {
    const fb = new FormBuilder();
    component.registerActivityForm = fb.group({
      projectId: ['', Validators.required],
    });

    const registerActivityService = TestBed.inject(RegisterActivityService);
    const spyRegisterServiceRegisterActivity = spyOn(registerActivityService, 'registerActivity').and.returnValue(
      of(true)
    );

    component.registerActivity();

    expect(spyRegisterServiceRegisterActivity).not.toHaveBeenCalled();
  });

  it('#fastFill should fill form data', () => {
    component.projects = projectsMock;

    const fb = new FormBuilder();
    component.registerActivityForm = fb.group({
      projectId: [''],
      date: [''],
      timeWorked: [''],
    });

    jasmine.clock().install();
    const mockDate = new Date();
    jasmine.clock().mockDate(mockDate);

    component.fastFill();

    expect(component.registerActivityForm.get('projectId')?.value).toEqual(1);
    expect(component.registerActivityForm.get('date')?.value).toEqual(new Date());
    expect(component.registerActivityForm.get('timeWorked')?.value).toEqual('08:00');
  });

  it('#ngOnInit should call functions', () => {
    const fb = new FormBuilder();
    component.registerActivityForm = fb.group({
      projectId: [1],
      description: ['test project'],
      date: [new Date()],
      timeWorked: ['08:00'],
      aditionalHoursCheck: [false],
      aditionalHours: [''],
      nightHoursCheck: [false],
      nightHoursStart: [''],
      nightHoursEnd: [''],
    });

    const createFormGroupSpy = spyOn(component, 'createFormGroup').and.returnValue();
    const updateCheckboxesSpy = spyOn(component, 'updateCheckboxes').and.returnValue();
    const getProjectsSpy = spyOn(component, 'getProjects').and.returnValue();

    fixture.detectChanges();

    expect(createFormGroupSpy).toHaveBeenCalled();
    expect(updateCheckboxesSpy).toHaveBeenCalled();
    expect(getProjectsSpy).toHaveBeenCalled();
  });
});
