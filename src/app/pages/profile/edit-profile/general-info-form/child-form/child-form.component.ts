import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Sex } from '../../../models/child.model';
@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss']
})
export class ChildFormComponent {
  @Input() childForm!: FormGroup;
  sexList = Object.values(Sex);

  constructor() { }
}
