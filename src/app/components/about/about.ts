import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class AboutComponent implements OnInit {
  summary: string = '';
  name: string = '';
  location: string = '';

  constructor(private portfolioData: PortfolioDataService) { }

  ngOnInit() {
    const info = this.portfolioData.personalInfo;
    this.summary = info.summary;
    this.name = info.name;
    this.location = info.location;
  }
}
