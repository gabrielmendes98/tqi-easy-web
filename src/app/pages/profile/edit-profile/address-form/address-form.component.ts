import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addressNumberValidator } from 'src/app/core/helpers/address-number.validator';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  addressForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      cep: ['', Validators.required],
      street: [{value: '', disabled: true}],
      neighborhood: [{value: '', disabled: true}],
      number: ['', [Validators.required, addressNumberValidator]],
      complement: ['', Validators.maxLength(140)],
      city: [{value: '', disabled: true}],
      state: [{value: '', disabled: true}],
    });
  }

}
