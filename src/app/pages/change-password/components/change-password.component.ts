import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { passwordValidator } from '../utils/password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.changePasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required],
    }, { validators: [passwordValidator] });
  }

  changePassword() {
    this.submitted = true;

    if(this.changePasswordForm.invalid) {
      return;
    }

    const { password, newPassword } = this.changePasswordForm.getRawValue();
    this.authService.changePassword(password, newPassword).subscribe(response => console.log(response));
  }
}
