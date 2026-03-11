import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

export interface HeroStat {
  label: string;
  value: string;
}

@Component({
  selector: 'app-portfolio-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('heroReveal', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(26px)' }),
        animate('650ms cubic-bezier(0.22, 1, 0.36, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class PortfolioHeroComponent implements OnInit, OnDestroy {
  @Input() name = 'Janapaneedi Chakradhar';
  @Input() role = 'Full-Stack Developer & Backend Developer';
  @Input() intro = '';
  @Input() company = 'Criativo Company, Kakinada';
  @Input() typedSkills: string[] = [];
  @Input() stats: HeroStat[] = [];
  @Input() profileImage = 'assets/img/chakrilogo.png';
  @Input() fallbackImage = 'assets/img/profile.jpg';

  typedText = '';
  private timer: ReturnType<typeof setTimeout> | null = null;
  private wordIndex = 0;
  private charIndex = 0;
  private deleting = false;

  ngOnInit(): void {
    this.typeLoop();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  scrollTo(sectionId: string, event?: Event): void {
    event?.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  setFallback(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img && img.src.indexOf(this.fallbackImage) === -1) {
      img.src = this.fallbackImage;
    }
  }

  private typeLoop(): void {
    if (!this.typedSkills.length) {
      return;
    }

    const currentWord = this.typedSkills[this.wordIndex % this.typedSkills.length];

    if (!this.deleting) {
      this.charIndex = Math.min(this.charIndex + 1, currentWord.length);
    } else {
      this.charIndex = Math.max(this.charIndex - 1, 0);
    }

    this.typedText = currentWord.substring(0, this.charIndex);

    if (!this.deleting && this.charIndex === currentWord.length) {
      this.deleting = true;
      this.timer = setTimeout(() => this.typeLoop(), 1200);
      return;
    }

    if (this.deleting && this.charIndex === 0) {
      this.deleting = false;
      this.wordIndex++;
    }

    const speed = this.deleting ? 45 : 85;
    this.timer = setTimeout(() => this.typeLoop(), speed);
  }
}
