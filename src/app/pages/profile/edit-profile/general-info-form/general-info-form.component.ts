import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { requiredIfChecked } from '../../../../core/helpers/conditional-required.validator';
import { ChildFormService } from './child-form/child-form.service';

@Component({
  selector: 'app-general-info-form',
  templateUrl: './general-info-form.component.html',
  styleUrls: ['./general-info-form.component.scss']
})
export class GeneralInfoFormComponent {
  generalInfoForm!: FormGroup;
  isMarried = false;

  constructor(private formBuilder: FormBuilder, private childFormService: ChildFormService) { }

  get children() { return this.generalInfoForm.get('children') as FormArray };
  get childrenControls() { return this.children?.controls as FormGroup[]}

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
        this.children.push(this.childFormService.newFormBuilder());
      } else {
        while(this.children.length)
          this.children.removeAt(0);
      }
    })

    return this.generalInfoForm;
  }

  addChild() {
    this.children.push(this.childFormService.newFormBuilder());
  }

  removeChild() {
    this.children.removeAt(this.children.length - 1);

    if(this.children.length === 0) this.generalInfoForm.get('hasChildren')?.setValue(false);
  }
}
