import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';

declare var feather: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  isSticky: boolean = false;
  isMenuOpen: boolean = false;
  activeSection: string = 'home';
  currentRoute: string = '/';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects.split('#')[0];
        const hash = window.location.hash.replace('#', '');
        if (hash) {
          this.activeSection = hash;
          setTimeout(() => this.scrollToSection(hash), 150);
        } else if (this.currentRoute !== '/' && this.currentRoute !== '') {
          this.activeSection = this.currentRoute.replace('/', '');
        } else {
          this.activeSection = 'home';
        }
        setTimeout(() => this.renderFeather(), 100);
      }
    });
  }

  ngAfterViewInit() {
    this.renderFeather();
  }

  renderFeather() {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    this.isSticky = scrollPos >= 50;

    if (this.currentRoute === '/' || this.currentRoute === '') {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            this.activeSection = section;
            break;
          }
        }
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigate(section: string) {
    this.isMenuOpen = false;
    this.activeSection = section;

    if (this.currentRoute === '/' || this.currentRoute === '') {
      this.scrollToSection(section);
    } else {
      this.router.navigate(['/'], { fragment: section }).then(() => {
        setTimeout(() => this.scrollToSection(section), 200);
      });
    }
  }

  private scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('is-revealed');
      el.classList.add('section-highlight');
      setTimeout(() => el.classList.remove('section-highlight'), 1200);
    }
  }
}
