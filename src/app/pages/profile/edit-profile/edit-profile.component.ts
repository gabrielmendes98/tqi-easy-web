import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddressFormComponent } from './address-form/address-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { GeneralInfoFormComponent } from './general-info-form/general-info-form.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  editProfileForm!: FormGroup;

  @ViewChild(AddressFormComponent, { static: true }) addressForm!: AddressFormComponent;
  @ViewChild(ContactFormComponent, { static: true }) contactForm!: ContactFormComponent;
  @ViewChild(GeneralInfoFormComponent, { static: true }) generalInfoForm!: GeneralInfoFormComponent;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editProfileForm = this.formBuilder.group({
      picture: [''],
      address: this.addressForm.createGroup(),
      contact: this.contactForm.createGroup(),
      generalInfo: this.generalInfoForm.createGroup(),
      hasRestriction: [false],
    });
  }

  saveProfile() {
    console.log(this.editProfileForm.value)
  }
}
