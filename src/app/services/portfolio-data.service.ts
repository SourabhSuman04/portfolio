import { Injectable } from '@angular/core';

export interface Experience {
    role: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
}

export interface Project {
    name: string;
    duration: string;
    location?: string;
    description: string[];
}

export interface SkillCategory {
    name: string;
    skills: string[];
}

export interface Education {
    degree: string;
    institution: string;
    location: string;
    duration: string;
    details: string[];
}

export interface Certification {
    name: string;
    issuer: string;
    link?: string;
}

@Injectable({
    providedIn: 'root'
})
export class PortfolioDataService {

    constructor() { }

    get personalInfo() {
        return {
            name: 'Sourabh Suman',
            phone: '+91-7073672213',
            email: 'sourabhsuman014@gmail.com',
            location: 'Kota, Rajasthan, India',
            linkedin: 'sourabh-suman04', // Assuming this is the LinkedIn handle based on the text
            summary: `Motivated Full Stack Developer with hands-on experience in .NET Core, Angular, Spring Boot, and MySQL.
 Currently working on enterprise-grade applications at Kamal Fincap Pvt. Ltd. Skilled in building scalable APIs,
 crafting responsive user interfaces, and integrating secure backend systems. Quick learner with strong debugging
 skills and a commitment to writing clean, efficient code. Looking to grow further in software development roles
 involving modern frameworks and high-impact solutions.`
        };
    }

    get experience(): Experience[] {
        return [
            {
                role: 'Software Developer',
                company: 'Kamal Fincap Pvt. Ltd.',
                location: 'Kota, Rajasthan',
                duration: 'Apr 2025 – Present', // Note: User provided future date, keeping as is or assuming typo. Will use as provided.
                description: [
                    'Developing enterprise solutions using Angular, .NET Core, APIs, and SQL Server.',
                    'Building and optimizing responsive web applications.'
                ]
            },
            {
                role: 'Java Full Stack Developer (Intern)',
                company: 'SKIT Jaipur',
                location: 'Jaipur, Rajasthan',
                duration: 'Jul 2023 – Jul 2024',
                description: [
                    'Developed and maintained Angular and Spring Boot-based applications.',
                    'Built RESTful APIs and improved performance/scalability.'
                ]
            }
        ];
    }

    get projects(): Project[] {
        return [
            {
                name: 'Ensure',
                duration: 'May 2025', // Future date again
                description: [
                    'Developed RESTful APIs in .NET Core for insurance claim verification related to death and hospitalization cases.',
                    'Built mobile-compatible APIs for secure document upload and case submission from field agents.',
                    'Integrated Angular admin panel for managing claims, verifying documents, and tracking branch-wise case status.',
                    'Contributed to legacy module migration, improving platform performance, maintainability, and system security.'
                ]
            },
            {
                name: 'Analytics',
                duration: 'May 2025',
                description: [
                    'Developed a real-time analytics dashboard to track overdue clients by DPD with detailed performance metrics.',
                    'Enabled live data refresh, advanced filtering, and fast report downloads to support decision-making across branches.',
                    'Contributed to upcoming KPI dashboards for tracking daily collections, visits, and branch-level performance.'
                ]
            },
            {
                name: 'OLTP Migration Project',
                duration: '', // No date provided in snippet
                description: [
                    'Migrated Java EE backend to Spring Boot, redesigned frontend using Angular.',
                    'Improved security, integrated services, and enhanced UI performance.'
                ]
            }
        ];
    }

    get education(): Education[] {
        return [
            {
                degree: 'Bachelor of Computer Application',
                institution: 'University of Rajasthan, Jaipur',
                location: 'Jaipur, Rajasthan',
                duration: 'Jul 2023 – Jul 2024', // Dates seem a bit short for a degree, but using provided info
                details: [
                    '70%',
                    'Coursework: Web Development, DBMS, Software Engineering',
                    'Participated in coding contests and academic workshops'
                ]
            }
        ];
    }

    get skills(): SkillCategory[] {
        return [
            {
                name: 'Languages',
                skills: ['Java', 'C', 'JavaScript', 'HTML', 'CSS', 'SQL']
            },
            {
                name: 'Frameworks',
                skills: ['Angular', 'Spring Boot', '.NET Core']
            },
            {
                name: 'Tools',
                skills: ['VS Code', 'STS', 'IntelliJ', 'Eclipse', 'IBM RAD']
            },
            {
                name: 'Database',
                skills: ['MySQL', 'SQL Server']
            },
            {
                name: 'Other',
                skills: ['REST APIs', 'MVC Architecture', 'Git', 'Postman']
            }
        ];
    }

    get certifications(): Certification[] {
        return [
            {
                name: 'Java Programming',
                issuer: '[Link or description]' // Placeholder as per user text
            },
            {
                name: 'Programming Networking in Java',
                issuer: 'Udemy'
            }
        ];
    }
}
