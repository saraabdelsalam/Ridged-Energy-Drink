import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastService } from '../../../shared/Services/toast.service';

@Component({
  selector: 'app-verify-account',
  standalone: true,
  templateUrl: './verify-account.html',
  styleUrl: './verify-account.scss',
})
export class VerifyAccount{

  isLoading = false;

  constructor(
    private auth: AuthService,
    private toast: ToastService,
    private router: Router
  ) {}

  verify() {
    const token = localStorage.getItem('verification_token');

    if (!token) {
      this.toast.error('No verification token found.');
      return;
    }

    this.isLoading = true;

    this.auth.verifyAccount(token).subscribe({
      next: (res) => {
        this.toast.success(res.message || 'Account verified!');
        localStorage.removeItem('verification_token');

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);

        this.isLoading = false;
      },
      error: (err) => {
        this.toast.error(err.error?.message || 'Verification failed.');
        this.isLoading = false;
      }
    });
  }
}
