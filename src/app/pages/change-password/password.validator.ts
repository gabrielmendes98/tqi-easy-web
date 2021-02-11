import { FormGroup } from '@angular/forms';

export function passwordValidator(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value;
  const newPassword = formGroup.get('newPassword')?.value;
  const confirmNewPassword = formGroup.get('confirmNewPassword')?.value;

  if(!(password.trim() + newPassword.trim() + confirmNewPassword.trim()))
    return null;

  if(password !== newPassword && newPassword === confirmNewPassword)
    return null;

  return { password: true };
}