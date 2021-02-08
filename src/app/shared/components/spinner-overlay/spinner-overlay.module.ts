import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';


import { SuccessOverlayComponent } from './success-overlay/success-overlay.component';
import { ErrorOverlayComponent } from './error-overlay/error-overlay.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';

const components = [
  SuccessOverlayComponent,
  ErrorOverlayComponent,
  SpinnerOverlayComponent
]

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class SpinnerOverlayModule { }
