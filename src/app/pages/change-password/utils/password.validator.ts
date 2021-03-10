import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const newPassword = control.get('newPassword')?.value;
  const confirmNewPassword = control.get('confirmNewPassword')?.value;

  if(!(password.trim() + newPassword.trim() + confirmNewPassword.trim()))
    return null;

  if(password !== newPassword && newPassword === confirmNewPassword)
    return null;

  return { password: true };
}