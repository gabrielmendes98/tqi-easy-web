import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { requiredIfChecked } from '../../core/helpers/conditional-required.validator';

@Component({
  selector: 'app-register-activity',
  templateUrl: './register-activity.component.html',
  styleUrls: ['./register-activity.component.scss']
})
export class RegisterActivityComponent implements OnInit {
  registerActivityForm!: FormGroup;
  showAditionalHoursField = false;
  showNightHoursField = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerActivityForm = this.formBuilder.group({
      project: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      timeWorked: ['', [Validators.required, Validators.min(0)]],
      aditionalHoursCheck: [false],
      aditionalHours: ['', requiredIfChecked('aditionalHoursCheck')],
      nightHoursCheck: [false],
      nightHoursStart: ['', requiredIfChecked('nightHoursCheck')],
      nightHoursEnd: ['', requiredIfChecked('nightHoursCheck')],
    });

    this.registerActivityForm.get('aditionalHoursCheck')?.valueChanges.subscribe(value => {
      this.showAditionalHoursField = value;
      this.registerActivityForm.get('aditionalHours')?.updateValueAndValidity();
    });

    this.registerActivityForm.get('nightHoursCheck')?.valueChanges.subscribe(value => {
      this.showNightHoursField = value;
      this.registerActivityForm.get('nightHoursStart')?.updateValueAndValidity();
      this.registerActivityForm.get('nightHoursEnd')?.updateValueAndValidity();
    })
  }
}
