import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, SkillCategory } from '../../services/portfolio-data.service';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    skillCategories: SkillCategory[] = [];

    constructor(private portfolioData: PortfolioDataService) { }

    ngOnInit(): void {
        this.skillCategories = this.portfolioData.skills;
    }
}
