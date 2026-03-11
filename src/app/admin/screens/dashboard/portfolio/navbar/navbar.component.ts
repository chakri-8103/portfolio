import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

export interface PortfolioNavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-portfolio-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('navIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-18px)' }),
        animate('450ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class PortfolioNavbarComponent {
  @Input() name = 'Chakri';
  @Input() links: PortfolioNavLink[] = [];
  @Input() darkMode = false;
  @Output() themeToggle = new EventEmitter<void>();

  mobileMenuOpen = false;
  activeFragment = 'hero';

  constructor(private readonly router: Router) {}

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  navigate(fragment: string, event?: Event): void {
    event?.preventDefault();
    this.activeFragment = fragment;
    this.mobileMenuOpen = false;
    this.router.navigate([], { fragment, queryParamsHandling: 'preserve' });
    setTimeout(() => {
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

