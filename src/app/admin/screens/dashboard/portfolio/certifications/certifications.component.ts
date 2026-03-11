import { CommonModule } from '@angular/common';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

export interface CertificationItem {
  title: string;
  issuer: string;
  badge: string;
}

@Component({
  selector: 'app-portfolio-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
  animations: [
    trigger('certsIn', [
      transition(':enter', [
        query(
          '.cert-card',
          [
            style({ opacity: 0, transform: 'translateY(16px)' }),
            stagger(80, animate('420ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class PortfolioCertificationsComponent {
  @Input() certifications: CertificationItem[] = [];
}

