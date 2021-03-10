import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Child } from '../../../models/child.model';

@Injectable({
  providedIn: 'root',
})
export class ChildFormService {
  constructor(private formBuilder: FormBuilder) {}

  newFormBuilder(child?: Child) {
    const childrenForm = this.formBuilder.group({
      name: [child?.name || '', Validators.required],
      birthDate: [child?.birthDate || '', Validators.required],
      sex: [child?.sex || '', Validators.required],
      liveWithParents: [child?.liveWithParents || false],
    });

    return childrenForm;
  }
}