import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioDataService, BlogPost } from '../../services/portfolio-data.service';

declare var feather: any;

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements AfterViewInit {
  private portfolioData = inject(PortfolioDataService);
  readonly post: BlogPost = this.portfolioData.blogPosts[0];
  readonly personal = this.portfolioData.personalInfo;

  ngAfterViewInit() {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }
}
