import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, Education, Certification } from '../../services/portfolio-data.service';

@Component({
    selector: 'app-education',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
    educationList: Education[] = [];
    certifications: Certification[] = [];

    constructor(private portfolioData: PortfolioDataService) { }

    ngOnInit(): void {
        this.educationList = this.portfolioData.education;
        this.certifications = this.portfolioData.certifications;
    }
}
