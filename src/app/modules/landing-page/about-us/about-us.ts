import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.html',
  styleUrls: ['./about-us.scss'],
})
export class AboutUsComponent implements AfterViewInit {
  @ViewChild('statNumbers', { static: false }) statNumbersRef!: ElementRef;

  ngAfterViewInit() {
    const statNumbers = this.statNumbersRef.nativeElement.querySelectorAll('.stat-number');

    const animateValue = (element: HTMLElement, start: number, end: number, duration: number) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
              element.textContent = value.toString();
              window.requestAnimationFrame(step);
            } 
        else {
              element.textContent = end === 150 ? end + 'K' : end + '%';
            }

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const targetValue = parseInt(target.getAttribute('data-target') || '0');
          animateValue(target, 0, targetValue, 300);
          observer.unobserve(target);
        }
      });
    });

    statNumbers.forEach((number: HTMLElement) => {
      observer.observe(number);
    });
  }
}
