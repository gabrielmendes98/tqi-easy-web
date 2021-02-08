import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/user/user.service';
import { requiredIfChecked } from '../../shared/validators/conditional-required.validator';
import { Project } from './project/project.model';
import { ProjectService } from './project/project.service';
import { RegisterActivityService } from './register-activity.service';

@Component({
  selector: 'app-register-activity',
  templateUrl: './register-activity.component.html',
  styleUrls: ['./register-activity.component.scss']
})
export class RegisterActivityComponent implements OnInit {
  registerActivityForm!: FormGroup;
  showAditionalHoursField = false;
  showNightHoursField = false;

  projects: Project[] = [];

  constructor(
    private formBuilder: FormBuilder, 
    private projectService: ProjectService, 
    private registerActivityService: RegisterActivityService,
    private userService: UserService,
    ) { }

  ngOnInit(): void {
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

    this.subscribeCheckBoxes();

    this.projectService.getAll().subscribe(projects => this.projects = projects);
  }

  subscribeCheckBoxes() {
    this.registerActivityForm.get('aditionalHoursCheck')?.valueChanges.subscribe(value => {
      this.showAditionalHoursField = value;
      this.registerActivityForm.get('aditionalHours')?.updateValueAndValidity();
    });

    this.registerActivityForm.get('nightHoursCheck')?.valueChanges.subscribe(value => {
      this.showNightHoursField = value;
      this.registerActivityForm.get('nightHoursStart')?.updateValueAndValidity();
      this.registerActivityForm.get('nightHoursEnd')?.updateValueAndValidity();
    });
  }

  registerActivity() {
    if(this.registerActivityForm.valid) {
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
