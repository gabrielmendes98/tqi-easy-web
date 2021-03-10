import { Component, Input, OnInit } from '@angular/core';
import { InterviewsInfo } from '../../models/interviews-info.model';

@Component({
  selector: 'app-interview-card',
  templateUrl: './interview-card.component.html',
  styleUrls: ['./interview-card.component.scss']
})
export class InterviewCardComponent implements OnInit {
  @Input() info!: InterviewsInfo;
  @Input() icon!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
