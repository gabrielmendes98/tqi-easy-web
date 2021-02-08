import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-app',
  templateUrl: './icon-app.component.html',
})
export class IconAppComponent {
  @Input() color!: string;

  constructor() { }
}
