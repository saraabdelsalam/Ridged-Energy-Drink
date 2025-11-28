import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../auth.service';
import { ToastService } from '../../../shared/Services/toast.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonModule,
    PasswordModule,
    IconFieldModule,
    InputIconModule
  ],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss',
})
export class ResetPassword {
  resetPasswordForm: FormGroup;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toast: ToastService) {
    this.resetPasswordForm = this.fb.group({
      NewPassword: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/)
      ]],
      ConfirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordsMatchValidator
    });
  }

  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('NewPassword')?.value;
    const confirm = group.get('ConfirmPassword')?.value;
    return password === confirm ? null : { passwordsMismatch: true };
  }

  onSubmit(): void {
    this.resetPasswordForm.markAllAsTouched();

    if (this.resetPasswordForm.valid) {
      this.isLoading = true;
      const token = localStorage.getItem('reset_token');
      if (!token) {
        this.toast.error('Reset token not found. Please try forgot password again.');
        this.router.navigate(['/forgot-password']);
        return;
      }
      const userModel = {
        token: token,
        newPassword: this.resetPasswordForm.value.NewPassword,
        confirmPassword: this.resetPasswordForm.value.ConfirmPassword
      };
      this.auth.resetPassword(userModel).subscribe({
        next: (response) => {
          this.isLoading = false;
          console.log("Reset password response:", response);
          if (response.success && response.statusCode == 200) {
            this.toast.success(response.message);
            localStorage.removeItem('reset_token');
            this.router.navigate(['/login']);
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
    const field = this.resetPasswordForm.get(fieldName);
    if (field?.hasError('required') && field.touched) return `${fieldName} is required`;
    if (field?.hasError('minlength') && field.touched) {
      const minLength = field.errors?.['minlength']?.requiredLength;
      return `Minimum length is ${minLength}`;
    }
    if (field?.hasError('pattern') && field.touched) {
      return 'Password must contain uppercase, lowercase, digit, and special character';
    }
    if (fieldName === 'ConfirmPassword' && this.resetPasswordForm.errors?.['passwordsMismatch'] && this.resetPasswordForm.get('ConfirmPassword')?.touched) {
      return 'Passwords do not match';
    }
    return '';
  }
}
