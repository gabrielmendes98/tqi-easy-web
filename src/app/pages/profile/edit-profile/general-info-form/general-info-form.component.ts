import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { requiredIfChecked } from '../../../../core/helpers/conditional-required.validator';
import { GeneralInfoFormService } from './general-info-form.service';

@Component({
  selector: 'app-general-info-form',
  templateUrl: './general-info-form.component.html',
  styleUrls: ['./general-info-form.component.scss']
})
export class GeneralInfoFormComponent {
  generalInfoForm!: FormGroup;
  isMarried = false;

  constructor(private formBuilder: FormBuilder, private generalInfoFormService: GeneralInfoFormService) { }

  get childrenForms() { return this.generalInfoForm.get('children') as FormArray };
  get childrenList() { return this.childrenForms?.controls as FormGroup[]}

  createGroup() {
    this.generalInfoForm = this.formBuilder.group({
      isMarried: [false],
      fianceName: ['', requiredIfChecked('isMarried')],
      hasChildren: [false],
      children: this.formBuilder.array([]),
    });
  
    this.generalInfoForm.get('isMarried')?.valueChanges.subscribe(value => {
      this.isMarried = value;
      this.generalInfoForm.get('fianceName')?.updateValueAndValidity();
    });

    this.generalInfoForm.get('hasChildren')?.valueChanges.subscribe(value => {
      if(value) {
        this.childrenForms.push(this.generalInfoFormService.createChildrenForm());
      } else {
        while(this.childrenForms.length)
          this.childrenForms.removeAt(0);
      }
    })

    return this.generalInfoForm;
  }

  addChild() {
    this.childrenForms.push(this.generalInfoFormService.createChildrenForm());
  }

  removeChild() {
    this.childrenForms.removeAt(this.childrenForms.length - 1);

    if(this.childrenForms.length === 0) this.generalInfoForm.get('hasChildren')?.setValue(false);
  }
}
