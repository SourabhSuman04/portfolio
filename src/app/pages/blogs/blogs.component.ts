import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioDataService, BlogPost } from '../../services/portfolio-data.service';

declare var feather: any;

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements AfterViewInit {
  private portfolioData = inject(PortfolioDataService);
  readonly blogs: BlogPost[] = this.portfolioData.blogPosts;
  readonly personal = this.portfolioData.personalInfo;

  ngAfterViewInit() {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }
}
