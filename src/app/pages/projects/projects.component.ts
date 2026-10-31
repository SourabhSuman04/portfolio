import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioDataService, FeaturedProject, AdditionalProject } from '../../services/portfolio-data.service';

declare var feather: any;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  private portfolioData = inject(PortfolioDataService);
  selectedCategory: string = 'all';
  readonly featuredProjects: FeaturedProject[] = this.portfolioData.featuredProjects;
  readonly additionalProjects: AdditionalProject[] = this.portfolioData.additionalProjects;

  ngAfterViewInit() {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
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
}
