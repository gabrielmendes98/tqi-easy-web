import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskModule } from 'ngx-mask';

import { ProfileComponent } from './components/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { AddressFormComponent } from './edit-profile/address-form/address-form.component';
import { ContactFormComponent } from './edit-profile/contact-form/contact-form.component';
import { GeneralInfoFormComponent } from './edit-profile/general-info-form/general-info-form.component';
import { ChildFormComponent } from './edit-profile/general-info-form/child-form/child-form.component'

const materialModules = [
  MatButtonModule,
  MatInputModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatSelectModule,
  MatIconModule,
  MatDatepickerModule,
];

@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    AddressFormComponent,
    ContactFormComponent,
    GeneralInfoFormComponent,
    ChildFormComponent,
  ],
  exports: [
    ProfileComponent,
  ],
  imports: [
    ...materialModules,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProfileRoutingModule,
    NgxMaskModule.forRoot(),
  ]
})
export class ProfileModule { }
