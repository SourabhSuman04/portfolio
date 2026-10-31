import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { ContactService } from '../../services/contact.service';

declare var feather: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  private portfolioData = inject(PortfolioDataService);
  private contactService = inject(ContactService);

  readonly personal = this.portfolioData.personalInfo;

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  contactError: string = '';
  contactSuccess: string = '';
  isSubmitting: boolean = false;
  mailToUrl: string = '';

  ngAfterViewInit() {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }

  async submitContact() {
    this.contactError = '';
    this.contactSuccess = '';

    if (!this.contactForm.name.trim()) {
      this.contactError = '*Please enter your name*';
      return;
    }
    if (!this.contactForm.email.trim() || !this.contactForm.email.includes('@')) {
      this.contactError = '*Please enter a valid email address*';
      return;
    }
    if (!this.contactForm.subject.trim()) {
      this.contactError = '*Please enter a subject*';
      return;
    }
    if (!this.contactForm.message.trim()) {
      this.contactError = '*Please enter your message*';
      return;
    }

    this.isSubmitting = true;
    this.mailToUrl = this.contactService.getMailToUrl(this.contactForm);

    const result = await this.contactService.sendMessage(this.contactForm);
    this.isSubmitting = false;

    if (result.success) {
      this.contactSuccess = result.message;
      this.contactForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } else {
      this.contactError = result.message;
    }
  }
}
