import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-children-form',
  templateUrl: './children-form.component.html',
  styleUrls: ['./children-form.component.scss']
})
export class ChildrenFormComponent {
  childrenForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  createGroup() {
    this.childrenForm = this.formBuilder.group({
      name: ['', Validators.required],
      birthDate: ['', Validators.required],
      sex: ['', Validators.required],
      liveWithParents: [false],
    });

    return this.childrenForm;
  }
}
