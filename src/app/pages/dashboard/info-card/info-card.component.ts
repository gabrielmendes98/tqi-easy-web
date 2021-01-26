import { Component, Input, OnInit } from '@angular/core';
import { GenericInfo } from '../models/generic-info.model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input() info!: GenericInfo;
  @Input() icon!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
