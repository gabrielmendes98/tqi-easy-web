import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      alternativeEmail: ['', Validators.email],
      cellPhone: [''],
      landPhone: [''],
      emergencyContact: this.formBuilder.group({
        name: [''],
        cellPhone: [''],
        landPhone: [''],
        relationship: ['', Validators.maxLength(140)],
      }),
    });
  }

}
