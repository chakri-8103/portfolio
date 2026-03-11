import { CommonModule } from '@angular/common';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

export interface AchievementItem {
  title: string;
  detail: string;
}

@Component({
  selector: 'app-portfolio-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
  animations: [
    trigger('achieveIn', [
      transition(':enter', [
        query(
          '.achievement-card',
          [
            style({ opacity: 0, transform: 'translateY(14px)' }),
            stagger(80, animate('380ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class PortfolioAchievementsComponent {
  @Input() achievements: AchievementItem[] = [];
}

