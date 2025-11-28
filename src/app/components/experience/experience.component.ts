import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, Experience } from '../../services/portfolio-data.service';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
    experiences: Experience[] = [];

    constructor(private portfolioData: PortfolioDataService) { }

    ngOnInit(): void {
        this.experiences = this.portfolioData.experience;
    }
}
