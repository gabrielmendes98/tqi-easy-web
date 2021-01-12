import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-app',
  templateUrl: './icon-app.component.html',
  styleUrls: ['./icon-app.component.scss']
})
export class IconAppComponent implements OnInit {
  @Input() color!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
