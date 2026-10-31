import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioDataService, Experience, Education, Certification } from '../../services/portfolio-data.service';

declare var feather: any;

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements AfterViewInit {
  private portfolioData = inject(PortfolioDataService);
  activeExp: number = 0;
  readonly experiences: Experience[] = this.portfolioData.experiences;
  readonly educationList: Education[] = this.portfolioData.educationList;
  readonly certification: Certification = this.portfolioData.certification;
  readonly personal = this.portfolioData.personalInfo;

  ngAfterViewInit() {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }

  toggleExp(i: number) {
    this.activeExp = this.activeExp === i ? -1 : i;
  }
}
