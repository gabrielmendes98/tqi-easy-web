import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addressNumberValidator } from '../../../../shared/validators/address-number.validator';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
  addressForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  createGroup() {
    this.addressForm = this.formBuilder.group({
      cep: ['', Validators.required],
      street: [{value: '', disabled: true}],
      neighborhood: [{value: '', disabled: true}],
      number: ['', [Validators.required, addressNumberValidator ]],
      complement: ['', Validators.maxLength(140)],
      city: [{value: '', disabled: true}],
      state: [{value: '', disabled: true}],
    });

    return this.addressForm;
  }
}
