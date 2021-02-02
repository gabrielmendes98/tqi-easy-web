import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  createGroup() {
    this.contactForm = this.formBuilder.group({
      alternativeEmail: ['', Validators.email],
      cellPhone: ['', Validators.required],
      landPhone: [''],
      emergencyContact: this.formBuilder.group({
        name: [''],
        cellPhone: [''],
        landPhone: [''],
        relationship: ['', Validators.maxLength(140)],
      }),
    });

    return this.contactForm;
  }
}
