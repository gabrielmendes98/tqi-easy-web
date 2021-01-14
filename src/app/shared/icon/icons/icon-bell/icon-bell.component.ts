import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-bell',
  templateUrl: './icon-bell.component.html',
  styleUrls: ['./icon-bell.component.scss']
})
export class IconBellComponent implements OnInit {
  @Input() color!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
