import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';




import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ChangePasswordModule { }
