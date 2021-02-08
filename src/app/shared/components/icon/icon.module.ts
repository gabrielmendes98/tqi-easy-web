import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { IconAppComponent } from './icons/icon-app/icon-app.component';
import { IconBellComponent } from './icons/icon-bell/icon-bell.component';
import { IconInterviewPersonComponent } from './icons/icon-interview-person/icon-interview-person.component';
import { IconSpeakerComponent } from './icons/icon-speaker/icon-speaker.component';



@NgModule({
  declarations: [
    IconComponent,
    IconAppComponent,
    IconBellComponent,
    IconInterviewPersonComponent,
    IconSpeakerComponent
  ],
  exports: [
    IconComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class IconModule { }
