import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../auth.service';
import { ToastService } from '../../../shared/Services/toast.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule
  ],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  forgotPasswordForm: FormGroup;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toast: ToastService) {
    this.forgotPasswordForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    this.forgotPasswordForm.markAllAsTouched();

    if (this.forgotPasswordForm.valid) {
      this.isLoading = true;
      const userModel = { email: this.forgotPasswordForm.value.Email };
      this.auth.forgotPassword(userModel).subscribe({
        next: (response) => {
          this.isLoading = false;
          console.log("Forgot password response:", response);
          if (response.success && response.statusCode == 200) {
            this.toast.success(response.message);
            if (response.data?.resetToken) {
              const resetToken = response.data.resetToken;
              localStorage.setItem('reset_token', resetToken);
            }
            this.router.navigate(['/reset-password']);
          } else {
            this.toast.error(response.message);
          }
        },
        error: (err) => {
          this.isLoading = false;
          if (err.error?.message) {
            this.toast.error(err.error.message);
          } else {
            this.toast.error("Something went wrong. Please try again.");
          }
          console.log("Full error:", err);
        },
      });
    }
  }

  getErrorMessage(fieldName: string): string {
    const field = this.forgotPasswordForm.get(fieldName);
    if (field?.hasError('required') && field.touched) return `${fieldName} is required`;
    if (field?.hasError('email') && field.touched) return 'Please enter a valid email';
    return '';
  }
}
