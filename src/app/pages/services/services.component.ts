import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioDataService, ServiceItem } from '../../services/portfolio-data.service';

declare var feather: any;

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {
  private portfolioData = inject(PortfolioDataService);
  readonly services: ServiceItem[] = this.portfolioData.services;
  readonly personal = this.portfolioData.personalInfo;

  ngAfterViewInit() {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }
}
