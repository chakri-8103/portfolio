import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  summary: string;
  highlights: string[];
}

@Component({
  selector: 'app-portfolio-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [
    trigger('timelineIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(18px)' }),
        animate('520ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class PortfolioExperienceComponent {
  @Input() experiences: ExperienceItem[] = [];
}

