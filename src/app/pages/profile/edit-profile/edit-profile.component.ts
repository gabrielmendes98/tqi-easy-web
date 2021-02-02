import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { AddressFormComponent } from './address-form/address-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { GeneralInfoFormComponent } from './general-info-form/general-info-form.component';
import { Profile } from './profile.model';

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

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.editProfileForm = this.formBuilder.group({
      picture: [''],
      address: this.addressForm.createGroup(),
      contact: this.contactForm.createGroup(),
      generalInfo: this.generalInfoForm.createGroup(),
      hasBirthdayRestriction: [false],
    });

    this.profileService.getProfile().subscribe(profile => {
      this.editProfileForm.patchValue(profile);

      profile.generalInfo.children?.forEach(child => {
        this.generalInfoForm.addChild(child);
      });

      this.generalInfoForm.subscribe();
    });
  }

  saveProfile() {
    if(this.editProfileForm.valid) {
      const profile = this.editProfileForm.value as Profile;
      this.profileService.saveProfile(profile).subscribe(response => console.log(response));
    }
  }

  setImage(event: any) {
    const file = event.target.files[0];
    
    const reader = new FileReader();
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.editProfileForm.patchValue({
        picture: reader.result,
      });
    }    
  }
}
