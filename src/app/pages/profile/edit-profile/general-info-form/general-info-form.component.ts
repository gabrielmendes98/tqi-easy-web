import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { requiredIfChecked } from '../../../../core/helpers/conditional-required.validator';

@Component({
  selector: 'app-general-info-form',
  templateUrl: './general-info-form.component.html',
  styleUrls: ['./general-info-form.component.scss']
})
export class GeneralInfoFormComponent implements OnInit {
  generalInfoForm!: FormGroup;
  isMarried = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.generalInfoForm = this.formBuilder.group({
      isMarried: [false],
      fianceName: ['', requiredIfChecked('isMarried')],
      hasChildren: [false],
    });

    this.generalInfoForm.get('isMarried')?.valueChanges.subscribe(value => {
      this.isMarried = value;
      this.generalInfoForm.get('fianceName')?.updateValueAndValidity();
    })
  }

}
