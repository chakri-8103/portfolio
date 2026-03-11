import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class PortfolioFooterComponent {
  @Input() name = 'Chakri';
  @Input() year = new Date().getFullYear();
  @Input() quickLinks: { label: string; fragment: string }[] = [];
  @Input() socials: { label: string; icon: string; url: string }[] = [];

  jumpTo(fragment: string, event?: Event): void {
    event?.preventDefault();
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

