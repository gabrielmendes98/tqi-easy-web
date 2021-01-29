import { AbstractControl } from "@angular/forms";

export function addressNumberValidator(control: AbstractControl) {

  console.log(control.value)

  if(!/^[1-9][0-9]*$/.test(control.value) && control.value !== null && control.value !== undefined && control.value !== '') {
    return { addressNumber: true };
  }

  return null;
}