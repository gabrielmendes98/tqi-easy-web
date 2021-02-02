import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-speaker',
  templateUrl: './icon-speaker.component.html',
})
export class IconSpeakerComponent {
  @Input() color!: string;

  constructor() { }
}
