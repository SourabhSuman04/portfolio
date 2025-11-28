import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent implements OnInit {
  email: string = '';
  phone: string = '';
  linkedin: string = '';

  constructor(private portfolioData: PortfolioDataService) { }

  ngOnInit() {
    const info = this.portfolioData.personalInfo;
    this.email = info.email;
    this.phone = info.phone;
    this.linkedin = info.linkedin;
  }
}
