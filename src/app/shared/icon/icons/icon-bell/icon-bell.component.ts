import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-bell',
  templateUrl: './icon-bell.component.html',
})
export class IconBellComponent {
  @Input() color!: string;

  constructor() { }

}
