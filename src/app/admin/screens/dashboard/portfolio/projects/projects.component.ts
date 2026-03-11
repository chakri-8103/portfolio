import { CommonModule } from '@angular/common';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
}

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('projectIn', [
      transition(':enter', [
        query(
          '.project-card',
          [
            style({ opacity: 0, transform: 'translateY(18px)' }),
            stagger(95, animate('460ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class PortfolioProjectsComponent {
  @Input() projects: ProjectItem[] = [];
}

