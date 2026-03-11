import { CommonModule } from '@angular/common';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input } from '@angular/core';

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
}

export interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

@Component({
  selector: 'app-portfolio-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('cardStagger', [
      transition(':enter', [
        query(
          '.skill-group',
          [
            style({ opacity: 0, transform: 'translateY(16px)' }),
            stagger(90, animate('420ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class PortfolioSkillsComponent implements AfterViewInit {
  @Input() groups: SkillGroup[] = [];
  animateBars = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animateBars = true;
    }, 150);
  }
}

