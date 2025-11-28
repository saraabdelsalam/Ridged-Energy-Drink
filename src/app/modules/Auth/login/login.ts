import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../auth.service';
import { ToastService } from '../../../shared/Services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    IconFieldModule,
    InputIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toast: ToastService) {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      // fetching the api
      const userModel = this.loginForm.value;
      this.auth.login(userModel).subscribe({
        next: (response) => {
          if (response.success && response.statusCode == 200) {
            localStorage.setItem('user token', response.data.accessToken);
            this.toast.success(response.message);
            this.router.navigate(['/']);
          } else {
            this.toast.error(response.message);
          }
        },
        error: (err) => {
          if (err.error?.message) {
            this.toast.error(err.error.message);
          } else {
            this.errorMessage = "Something went wrong. Please try again.";
            this.toast.error(this.errorMessage);
          }
          console.log("Full error:", err);
        },
      });
    }
  }

  hasError(fieldName: string, errorType: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field?.hasError(errorType) && field.touched);
  }

  getErrorMessage(fieldName: string): string {
    if (this.hasError(fieldName, 'required')) return `${fieldName} is required`;
    if (this.hasError(fieldName, 'email')) return 'Please enter a valid email';
    return '';
  }
}
