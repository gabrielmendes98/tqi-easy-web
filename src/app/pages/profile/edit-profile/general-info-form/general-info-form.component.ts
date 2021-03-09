import { ChangeDetectorRef, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { ChildFormService } from './child-form/child-form.service';
import { Child } from './child-form/child.model';
import { requiredIfChecked } from 'src/app/shared/validators/conditional-required.validator';

@Component({
  selector: 'app-general-info-form',
  templateUrl: './general-info-form.component.html',
  styleUrls: ['./general-info-form.component.scss']
})
export class GeneralInfoFormComponent {
  generalInfoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private childFormService: ChildFormService, private ref: ChangeDetectorRef) { }

  get children() { return this.generalInfoForm.get('children') as FormArray };
  get childrenControls() { return this.children?.controls as FormGroup[]};
  get isMarried() { return this.generalInfoForm.get('isMarried')?.value as boolean};

  createGroup() {
    this.generalInfoForm = this.formBuilder.group({
      isMarried: [false],
      fianceName: ['', requiredIfChecked('isMarried')],
      hasChildren: [false],
      children: this.formBuilder.array([]),
    });

    return this.generalInfoForm;
  }

  subscribe() {
    this.generalInfoForm.get('isMarried')?.valueChanges.subscribe(() => {
      this.generalInfoForm.get('fianceName')?.updateValueAndValidity();
    });

    this.generalInfoForm.get('hasChildren')?.valueChanges.subscribe(value => {
      if(value) {
        this.children.push(this.childFormService.newFormBuilder());
      } else {
        this.children.clear();
      }
    });
  }

  addChild(child?: Child) {
    this.children.push(this.childFormService.newFormBuilder(child));
    this.ref.detectChanges();
  }

  removeChild() {
    this.children.removeAt(this.children.length - 1);

    if(this.children.length === 0) this.generalInfoForm.get('hasChildren')?.setValue(false);
  }

  trackByFn(index: number, item: FormGroup) {
    return index;
  }
}
