import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
      icon: 'pi pi-facebook'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com',
      icon: 'pi pi-instagram'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com',
      icon: 'pi pi-tiktok'
    },
    {
      name: 'X (Twitter)',
      url: 'https://www.x.com',
      icon: 'pi pi-twitter'
    }
  ];

  footerLinks = {
    helpInfo: [
      { label: 'Permissions', url: '#' },
      { label: 'Terms & Conditions', url: '#' },
      { label: 'Accessories', url: '#' },
      { label: 'Term Of Use', url: '#' }
    ],
    aboutUs: [
      { label: 'Help Center', url: '#' },
      { label: 'Address Store', url: '#' },
      { label: 'Privacy Policy', url: '#' },
      { label: 'News Teller', url: '#' }
    ]
  };

  legalLinks = [
    { label: 'Terms', url: '#' },
    { label: 'Privacy', url: '#' },
    { label: 'Cookies', url: '#' },
    { label: 'Legal', url: '#' },
    { label: 'Recalls', url: '#' }
  ];

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
