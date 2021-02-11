import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { passwordValidator } from './password.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required],
    }, { validator: passwordValidator });
  }

  changePassword() {
    const { password, newPassword } = this.changePasswordForm.getRawValue();

    if(this.changePasswordForm.valid)
      this.authService.changePassword(password, newPassword).subscribe(response => console.log(response));
  }
}
