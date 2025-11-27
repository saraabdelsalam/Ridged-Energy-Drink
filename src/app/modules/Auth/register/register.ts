import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { AuthService } from '../auth.service';
import { routes } from '../../../app.routes';
import { userRegisterRequest } from '../models/user.register';
import { ToastService } from '../../../shared/Services/toast.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    IconFieldModule,
    InputIconModule,
    CardModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class RegisterComponent {
  registrationForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toast: ToastService) {
    this.registrationForm = this.fb.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [
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
    const password = group.get('Password')?.value;
    const confirm = group.get('ConfirmPassword')?.value;
    return password === confirm ? null : { passwordsMismatch: true };
  }

  onSubmit(): void {

    this.registrationForm.markAllAsTouched();


    if (this.registrationForm.valid) {

      // fetching the api
      const userModel: userRegisterRequest = this.registrationForm.value;
      this.auth.register(userModel).subscribe({
        next: (response) => {
          console.log("Registration response:", response);
          if (response.success && response.statusCode == 200) {
              this.toast.success(response.message);
            if (response.data?.verificationToken) {
              localStorage.setItem('verification_token', response.data?.verificationToken);
            }
          }
          else {
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
    const field = this.registrationForm.get(fieldName);
    return !!(field?.hasError(errorType) && field.touched);
  }

  getErrorMessage(fieldName: string): string {
    if (this.hasError(fieldName, 'required')) return `${fieldName} is required`;
    if (this.hasError(fieldName, 'email')) return 'Please enter a valid email';
    if (this.hasError(fieldName, 'minlength')) {
      const minLength = this.registrationForm.get(fieldName)?.errors?.['minlength']?.requiredLength;
      return `Minimum length is ${minLength}`;
    }
    if (this.hasError(fieldName, 'pattern')) {
      return 'Password must contain uppercase, lowercase, digit, and special character';
    }
    if (fieldName === 'ConfirmPassword' && this.registrationForm.errors?.['passwordsMismatch'] && this.registrationForm.get('ConfirmPassword')?.touched) {
      return 'Passwords do not match';
    }
    return '';
  }

}