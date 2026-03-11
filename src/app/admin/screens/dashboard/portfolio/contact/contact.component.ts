import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('contactIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class PortfolioContactComponent {
  @Input() email = 'chakri.dev@example.com';
  @Input() linkedin = 'https://www.linkedin.com/';
  @Input() github = 'https://github.com/';
  @Input() location = 'Kakinada, Andhra Pradesh';

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  submitForm(): void {
    this.submitted = true;
    this.formData = { name: '', email: '', message: '' };
  }
}

