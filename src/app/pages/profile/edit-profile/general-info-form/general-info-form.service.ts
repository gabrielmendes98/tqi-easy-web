import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root',
})
export class GeneralInfoFormService {
  constructor(private formBuilder: FormBuilder) {}

  createChildrenForm() {
    const childrenForm = this.formBuilder.group({
      name: ['', Validators.required],
      birthDate: ['', Validators.required],
      sex: ['', Validators.required],
      liveWithParents: [false],
    });

    return childrenForm;
  }
}