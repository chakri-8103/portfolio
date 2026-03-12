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

  private readonly projectMedia: Record<string, string> = {
    'Lead Management System': 'assets/img/chart.png',
    'File Integrated Management System': 'assets/img/banner.jpg',
    'Secure Exam Portal': 'assets/img/studybanner.png',
    'Voting System for College Projects': 'assets/img/banner222.jpg',
    'Network Intrusion Detection System': 'assets/img/aws.jpg',
    'Notification Sender': 'assets/img/analysis_banner.png'
  };

  private readonly ownershipByTitle: Record<string, 'Solo Build' | 'Team Project'> = {
    'Lead Management System': 'Team Project',
    'File Integrated Management System': 'Team Project',
    'Secure Exam Portal': 'Solo Build',
    'Voting System for College Projects': 'Team Project',
    'Network Intrusion Detection System': 'Solo Build',
    'Notification Sender': 'Solo Build'
  };

  getProjectImage(project: ProjectItem): string {
    return this.projectMedia[project.title] ?? 'assets/img/card.jpg';
  }

  getOwnership(project: ProjectItem): 'Solo Build' | 'Team Project' {
    return this.ownershipByTitle[project.title] ?? 'Solo Build';
  }
}

