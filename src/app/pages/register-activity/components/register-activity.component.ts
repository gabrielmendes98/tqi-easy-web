import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/core/user/user.service';
import { requiredIfChecked } from '../../../shared/validators/conditional-required.validator';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { RegisterActivityService } from '../services/register-activity.service';

@Component({
  selector: 'app-register-activity',
  templateUrl: './register-activity.component.html',
  styleUrls: ['./register-activity.component.scss'],
})
export class RegisterActivityComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();

  registerActivityForm!: FormGroup;
  showAditionalHoursField = false;
  showNightHoursField = false;
  projects: Project[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private registerActivityService: RegisterActivityService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.createFormGroup();
    this.subscribeCheckBoxes();
    this.getProjects();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getProjects() {
    this.projectService.getAll().subscribe((projects) => (this.projects = projects));
  }

  createFormGroup() {
    this.registerActivityForm = this.formBuilder.group({
      projectId: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      timeWorked: ['', [Validators.required, Validators.min(0)]],
      aditionalHoursCheck: [false],
      aditionalHours: ['', requiredIfChecked('aditionalHoursCheck')],
      nightHoursCheck: [false],
      nightHoursStart: ['', requiredIfChecked('nightHoursCheck')],
      nightHoursEnd: ['', requiredIfChecked('nightHoursCheck')],
    });
  }

  subscribeCheckBoxes() {
    this.registerActivityForm
      .get('aditionalHoursCheck')
      ?.valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe((value) => {
        this.showAditionalHoursField = value;
        this.registerActivityForm.get('aditionalHours')?.updateValueAndValidity();
      });

    this.registerActivityForm
      .get('nightHoursCheck')
      ?.valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe((value) => {
        this.showNightHoursField = value;
        this.registerActivityForm.get('nightHoursStart')?.updateValueAndValidity();
        this.registerActivityForm.get('nightHoursEnd')?.updateValueAndValidity();
      });
  }

  registerActivity() {
    if (this.registerActivityForm.valid) {
      let activity = {} as any;
      Object.assign(activity, this.registerActivityForm.value);
      delete activity.aditionalHoursCheck;
      delete activity.nightHoursCheck;
      activity.userId = this.userService.getUserId();
      this.registerActivityService.registerActivity(activity).subscribe();
    }
  }

  fastFill() {
    this.registerActivityForm.patchValue({
      projectId: this.projects[0].id,
      date: new Date(),
      timeWorked: '08:00',
    });
  }
}
