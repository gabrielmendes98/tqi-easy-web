import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { ChildFormService } from './child-form/child-form.service';
import { requiredIfChecked } from 'src/app/shared/validators/conditional-required.validator';
import { Child } from '../../models/child.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-general-info-form',
  templateUrl: './general-info-form.component.html',
  styleUrls: ['./general-info-form.component.scss'],
})
export class GeneralInfoFormComponent implements OnDestroy {
  private destroyed$ = new Subject();

  generalInfoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private childFormService: ChildFormService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  get children() {
    return this.generalInfoForm.get('children') as FormArray;
  }
  get childrenControls() {
    return this.children?.controls as FormGroup[];
  }
  get isMarried() {
    return this.generalInfoForm.get('isMarried')?.value as boolean;
  }

  createGroup() {
    this.generalInfoForm = this.formBuilder.group({
      isMarried: [false],
      fianceName: ['', requiredIfChecked('isMarried')],
      hasChildren: [false],
      children: this.formBuilder.array([]),
    });

    return this.generalInfoForm;
  }

  watchConditions() {
    this.watchIsMarried();
    this.watchHasChildren();
  }

  watchHasChildren() {
    this.generalInfoForm
      .get('hasChildren')
      ?.valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe((value) => {
        if (value) {
          this.children.push(this.childFormService.newFormBuilder());
        } else {
          this.children.clear();
        }
      });
  }

  watchIsMarried() {
    this.generalInfoForm
      .get('isMarried')
      ?.valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.generalInfoForm.get('fianceName')?.updateValueAndValidity();
      });
  }

  addChild(child?: Child) {
    this.children.push(this.childFormService.newFormBuilder(child));
    this.ref.detectChanges();
  }

  removeChild() {
    this.children.removeAt(this.children.length - 1);

    if (this.children.length === 0) this.generalInfoForm.get('hasChildren')?.setValue(false);
  }

  trackByFn(index: number, item: FormGroup) {
    return index;
  }
}
