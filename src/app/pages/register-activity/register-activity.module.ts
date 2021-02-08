import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegisterActivityComponent } from './register-activity.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatFormFieldModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatInputModule,
  MatButtonModule,
];

@NgModule({
  declarations: [RegisterActivityComponent],
  exports: [RegisterActivityComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...materialModules,
  ],
})
export class RegisterActivityModule {}
