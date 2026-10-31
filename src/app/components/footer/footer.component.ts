import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';

declare var feather: any;

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
  private portfolioData = inject(PortfolioDataService);
  currentYear: number = new Date().getFullYear();
  readonly personal = this.portfolioData.personalInfo;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }

  navigate(section: string) {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      this.router.navigate(['/'], { fragment: section }).then(() => {
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      });
    }
  }
}
