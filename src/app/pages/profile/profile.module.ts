import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { MatButtonModule } from '@angular/material/button';
import { ProfileRoutingModule } from './profile-routing.module';
import { AddressFormComponent } from './edit-profile/address-form/address-form.component';
import { ContactFormComponent } from './edit-profile/contact-form/contact-form.component';
import { GeneralInfoFormComponent } from './edit-profile/general-info-form/general-info-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    AddressFormComponent,
    ContactFormComponent,
    GeneralInfoFormComponent,
  ],
  exports: [
    ProfileComponent,
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ProfileModule { }
