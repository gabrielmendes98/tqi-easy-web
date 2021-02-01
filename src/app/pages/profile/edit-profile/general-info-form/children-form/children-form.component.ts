import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-children-form',
  templateUrl: './children-form.component.html',
  styleUrls: ['./children-form.component.scss']
})
export class ChildrenFormComponent {
  @Input() childrenForm!: FormGroup;

  constructor() { }
}
