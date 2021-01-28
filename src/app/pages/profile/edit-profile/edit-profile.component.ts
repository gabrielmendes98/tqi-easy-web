import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  editProfileForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editProfileForm = this.formBuilder.group({
      picture: [''],
      address: [''],
      contact: [''],
      generalInfo: [''],
      hasRestrictionYes: [''],
      hasRestrictionNo: [''],
    });
  }

}
