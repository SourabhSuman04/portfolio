import { Component, OnInit, OnDestroy, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PortfolioDataService, FeaturedProject, AdditionalProject, SkillCategory, Experience, Education, Certification } from '../../services/portfolio-data.service';
import { ContactService } from '../../services/contact.service';

declare var feather: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  private portfolioData = inject(PortfolioDataService);
  private contactService = inject(ContactService);

  // Service Data
  readonly personal = this.portfolioData.personalInfo;
  readonly experiences: Experience[] = this.portfolioData.experiences;
  readonly featuredProjects: FeaturedProject[] = this.portfolioData.featuredProjects;
  readonly additionalProjects: AdditionalProject[] = this.portfolioData.additionalProjects;
  readonly skillCategories: SkillCategory[] = this.portfolioData.skillCategories;
  readonly educationList: Education[] = this.portfolioData.educationList;
  readonly certification: Certification = this.portfolioData.certification;

  // Typewriter
  words: string[] = ['.NET 8', 'Angular', 'ASP.NET Core', 'SQL Server', 'REST APIs', 'Full Stack'];
  typewriterText: string = '';
  private wordIndex: number = 0;
  private isDeleting: boolean = false;
  private timer: any;

  // Experience accordion
  activeExp: number = 0; // 0: Kamal Fincap, 1: SKIT

  // Project filtering
  selectedCategory: string = 'all';

  // Contact Form
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

  constructor() {}

  ngOnInit() {
    this.startTypewriter();
  }

  ngAfterViewInit() {
    this.renderFeather();
    this.setupScrollReveal();
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }

  renderFeather() {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }

  private setupScrollReveal() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const sections = document.querySelectorAll('section.section');
    sections.forEach((sec) => observer.observe(sec));
  }

  private startTypewriter() {
    const tick = () => {
      const fullWord = this.words[this.wordIndex % this.words.length];
      if (this.isDeleting) {
        this.typewriterText = fullWord.substring(0, this.typewriterText.length - 1);
      } else {
        this.typewriterText = fullWord.substring(0, this.typewriterText.length + 1);
      }

      let delta = 150 - Math.random() * 80;
      if (this.isDeleting) delta /= 2;

      if (!this.isDeleting && this.typewriterText === fullWord) {
        delta = 2000;
        this.isDeleting = true;
      } else if (this.isDeleting && this.typewriterText === '') {
        this.isDeleting = false;
        this.wordIndex++;
        delta = 400;
      }

      this.timer = setTimeout(tick, delta);
    };

    tick();
  }

  toggleExp(index: number) {
    this.activeExp = this.activeExp === index ? -1 : index;
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredProjects(): FeaturedProject[] {
    if (this.selectedCategory === 'all') {
      return this.featuredProjects;
    }
    return this.featuredProjects.filter(p =>
      p.category.toLowerCase().includes(this.selectedCategory.toLowerCase()) ||
      p.techStack.some(t => t.toLowerCase().includes(this.selectedCategory.toLowerCase()))
    );
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('is-revealed');
      el.classList.add('section-highlight');
      setTimeout(() => el.classList.remove('section-highlight'), 1200);
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
