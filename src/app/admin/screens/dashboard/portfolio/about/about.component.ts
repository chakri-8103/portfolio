import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  year: string;
}

@Component({
  selector: 'app-portfolio-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('sectionIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class PortfolioAboutComponent {
  @Input() story = '';
  @Input() education: EducationItem[] = [];
}
