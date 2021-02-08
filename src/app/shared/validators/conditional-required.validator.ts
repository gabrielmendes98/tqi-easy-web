import { AbstractControl, Validators } from '@angular/forms';

export function requiredIfChecked(checkboxName: string) {
  return (formControl: AbstractControl) => {
    if (!formControl.parent) {
      return null;
    }
    if (formControl.parent.get(checkboxName)?.value) {
      return Validators.required(formControl);
    }
    return null;
  };
}
