import { Component, Input } from '@angular/core';
import { ToastModule, Toast } from 'primeng/toast';
import { ButtonModule } from "primeng/button";
@Component({
  selector: 'app-toast-notification',
  imports: [Toast, ButtonModule],
  templateUrl: './toast-notification.html',
  styleUrl: './toast-notification.scss',
})

export class ToastNotification {
}
