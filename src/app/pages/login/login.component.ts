import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidePassword = true;

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  getErrorMessage() {
    if(this.loginForm.get('email')?.hasError('required'))
      return 'Você deve inserir um email';
    if(this.loginForm.get('email')?.hasError('email'))
      return 'O email é inválido';
    return '';
  }

  login() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.login(email, password).subscribe(
      response => console.log(response), 
      error => {
        console.log(error);
      }
    );
  }
}
