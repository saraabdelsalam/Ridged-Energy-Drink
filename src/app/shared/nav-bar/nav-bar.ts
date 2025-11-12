import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import "primeicons/primeicons.css";

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, MenuModule, ButtonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {
  items: MenuItem[] = [];

  constructor(private router: Router) {
    this.initializeMenuItems();
  }

  private initializeMenuItems(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => this.router.navigate(['/'])
      },
      {
        label: 'Products',
        icon: 'pi pi-box',
        command: () => this.router.navigate(['/'])
      },
      {
        label: 'About Us',
        icon: 'pi pi-info-circle',
        command: () => this.router.navigate(['/'])
      },
      {
        label: 'Contact',
        icon: 'pi pi-phone',
        command: () => this.router.navigate(['/'])
      }
    ];
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
