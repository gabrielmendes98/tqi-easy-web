import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-interview-person',
  templateUrl: './icon-interview-person.component.html',
})
export class IconInterviewPersonComponent {
  @Input() color!: string;

  constructor() { }
}
