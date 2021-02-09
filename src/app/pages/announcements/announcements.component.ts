import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent implements OnInit {
  announcement =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nihil similique nesciunt laboriosam reiciendis dolore tempore fugiat, repudiandae eos, soluta quae quisquam ex esse nemo odio animi quo! Amet, fuga?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nihil similique nesciunt laboriosam reiciendis dolore tempore fugiat, repudiandae eos, soluta quae quisquam ex esse nemo odio animi quo! Amet, fuga?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nihil similique nesciunt laboriosam reiciendis dolore tempore fugiat, repudiandae eos, soluta quae quisquam ex esse nemo odio animi quo! Amet, fuga?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nihil ';

  constructor() {}

  ngOnInit(): void {}
}
