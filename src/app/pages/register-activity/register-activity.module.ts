import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RegisterActivityComponent } from "./register-activity.component";
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from "@angular/forms";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [
    RegisterActivityComponent,
  ],
  exports: [
    RegisterActivityComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class RegisterActivityModule { }
