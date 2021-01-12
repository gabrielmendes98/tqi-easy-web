import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { IconAppComponent } from './icons/icon-app/icon-app.component';



@NgModule({
  declarations: [
    IconComponent,
    IconAppComponent
  ],
  exports: [
    IconComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class IconModule { }
