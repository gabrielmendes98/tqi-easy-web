import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidePassword = true;
  loginError = false;
  loginErrorMessage = '';
  loading = false;

  fromUrl?: string;

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createFormGroup();
    this.watchIfNeedsRecirect();
  }

  createFormGroup() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  watchIfNeedsRecirect() {
    this.activatedRoute.queryParams.subscribe(params => this.fromUrl = params.fromUrl);
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

    if(this.loginForm.valid) {
      this.loading = true;
      this.authService.login(email, password).subscribe(
        () => {
          if(this.fromUrl) this.router.navigateByUrl(this.fromUrl);
          else this.router.navigate(['/']);
        }, 
        error => {
          this.loginErrorMessage = error.error.message;
          this.loginError = true;
          this.loading = false;
        }
      );
    }
  }
}
