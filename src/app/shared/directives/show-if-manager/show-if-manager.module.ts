import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowIfManagerDirective } from './show-if-manager.directive';

@NgModule({
  declarations: [ShowIfManagerDirective],
  exports: [ShowIfManagerDirective],
  imports: [CommonModule],
})
export class ShowIfManagerModule { }