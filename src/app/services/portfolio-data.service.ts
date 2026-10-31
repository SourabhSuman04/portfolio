import { Injectable } from '@angular/core';

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  technologies: string[];
  responsibilities: string[];
}

export interface FeaturedProject {
  id: string;
  name: string;
  category: string;
  description: string;
  contributions: string[];
  techStack: string[];
  icon: string;
  image: string;
  bgClass: string;
}

export interface AdditionalProject {
  title: string;
  description: string;
  tech: string[];
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  year: string;
  score: string;
}

export interface Certification {
  title: string;
  platform: string;
  url: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  readonly personalInfo = {
    name: 'Sourabh Suman',
    title: 'Full Stack Developer',
    location: 'Kota, Rajasthan, India',
    email: 'sourabhsuman014@gmail.com',
    phone: '+91-7073672213',
    linkedin: 'https://linkedin.com/in/sourabh-suman04',
    github: 'https://github.com/SourabhSuman04',
    resumeUrl: 'Sourabh_Suman_Resume.pdf',
    profileImage: 'images/personal/sourabh_profile.png',
    heroHeading: 'Building Scalable Applications. Solving Real-World Problems.',
    heroSubtitle: 'Full Stack Developer specializing in .NET Core, Angular, Java, and SQL Server.',
    introduction: `I am a Full Stack Developer with hands-on experience developing scalable web applications, REST APIs, database-driven systems, and enterprise business solutions.
I specialize in backend development using ASP.NET Core Web API, .NET 8, Dapper, Entity Framework Core, and SQL Server, along with frontend development using Angular, TypeScript, JavaScript, HTML, CSS, and Tailwind CSS.
I have contributed to real-world applications in microfinance, insurance claim management, document automation, and human resource management.
My experience includes developing RESTful APIs, optimizing SQL queries and stored procedures, integrating payment services, implementing role-based access control, automating PDF and Excel processing, and integrating AWS S3.
I enjoy solving complex technical problems, improving application performance, and building reliable software solutions.`
  };

  readonly experiences: Experience[] = [
    {
      role: 'Software Developer',
      company: 'Kamal Fincap Pvt. Ltd.',
      location: 'Kota, Rajasthan',
      duration: 'April 2025 – Present',
      type: 'Full-Time',
      technologies: ['.NET 8', 'ASP.NET Core Web API', 'Angular 19/20', 'SQL Server', 'Dapper', 'EF Core', 'AWS S3', 'SignalR', 'WebRTC'],
      responsibilities: [
        'Developed RESTful APIs using ASP.NET Core Web API, Dapper, and Entity Framework Core.',
        'Built reusable Angular components, services, forms, dashboards, and reporting modules.',
        'Designed and optimized SQL Server stored procedures, complex joins, temporary tables, and table-valued parameters.',
        'Integrated payment gateways, payment links, QR code generation, transaction verification, and payment status handling.',
        'Implemented AWS S3 document storage and retrieval pipelines.',
        'Developed automated PDF generation, document stamping, Excel imports, and report exports.',
        'Implemented role-based access control, user session management, and security features.',
        'Integrated SignalR and WebRTC for real-time communication and remote verification.',
        'Troubleshot application issues and delivered new business requirements across frontend, backend, and database layers.'
      ]
    },
    {
      role: 'Java Full Stack Developer Intern',
      company: 'SKIT, Jaipur',
      location: 'Jaipur, Rajasthan',
      duration: 'July 2023 – July 2024',
      type: 'Internship',
      technologies: ['Java', 'Spring Boot', 'Angular', 'REST APIs', 'SQL'],
      responsibilities: [
        'Learned and practiced Java full-stack enterprise development.',
        'Worked on Java programming, object-oriented design, and modern web development concepts.',
        'Practiced relational database connectivity, CRUD operations, and application logic.',
        'Gained hands-on experience with frontend/backend integration and production problem-solving.'
      ]
    }
  ];

  readonly featuredProjects: FeaturedProject[] = [
    {
      id: 'fieldmateplus',
      name: 'FieldMatePlus & Admin',
      category: 'Microfinance & Collection Management Platform',
      description: 'An enterprise application designed to manage microfinance operations, loan collections, field activities, payment processing, reporting, and branch operations.',
      contributions: [
        'Developed dynamic payment link generation and QR code integration with PhonePe, PayNearBy, and FingPay.',
        'Implemented payment verification and transaction status callback handling.',
        'Developed collection correction, reversal, center transfers, and operational management functionality.',
        'Engineered Cashbook, Branch Closing, OD/NPA, Fuel, Write-off, and Collection reporting modules.',
        'Implemented multi-sheet Excel uploads, validation, and template generation.',
        'Integrated AWS S3 for document storage with ImageSharp image processing.',
        'Implemented role-based access control (RBAC), device binding, and session revocation.',
        'Engineered GPS-based field visits and road-distance reporting using Mappls API.',
        'Significantly optimized reporting queries and SQL Server stored procedure performance.'
      ],
      techStack: ['.NET 8', 'ASP.NET Core Web API', 'Angular 19', 'SQL Server', 'Dapper', 'EF Core 8', 'AWS S3', 'QuestPDF', 'Mappls API'],
      icon: 'images/logos/Angular.svg',
      image: 'images/projects/fieldmateplus.jpg',
      bgClass: 'bg-soft-alt-orange'
    },
    {
      id: 'ensureweb',
      name: 'EnsurePortal & EnsureWeb',
      category: 'Insurance Claim Management Platform',
      description: 'An insurance claim management application supporting death claims, hospitalization claims (HOSPI Cash), documentation, verification, and claim processing workflows.',
      contributions: [
        'Developed comprehensive death claim and hospitalization case management workflows.',
        'Implemented dynamic claim forms and secure document upload workflows.',
        'Developed document verification, discrepancy tracking, and investigator audit logs.',
        'Implemented bulk Excel data imports using ClosedXML with Table-Valued Parameters.',
        'Engineered high-performance SQL Server stored procedures and multi-result set retrieval.',
        'Integrated AWS S3 evidence uploads with ImageSharp image compression.',
        'Developed Angular master screens, proof-viewers, and claim management interfaces.'
      ],
      techStack: ['.NET Core 8', 'Angular 20', 'SQL Server', 'Dapper', 'ClosedXML', 'AWS S3', 'ImageSharp'],
      icon: 'images/logos/bootstrap.svg',
      image: 'images/projects/ensureweb.jpg',
      bgClass: 'bg-soft-alt-info'
    },
    {
      id: 'documateplus',
      name: 'DocuMatePlus & TrackMate Admin',
      category: 'Loan Document Automation Platform',
      description: 'A loan document management and automation platform designed to simplify loan application processing, document generation, verification, and underwriting workflows.',
      contributions: [
        'Developed multi-stage Loan Against Property (LAP) application wizard with reactive forms and KYC uploads.',
        'Implemented automated PDF generation and coordinate-based PDF stamping using iText 7 with ZIP docket packaging.',
        'Developed underwriting maker-checker remarks and multi-level approval workflows.',
        'Engineered IBL onboarding, household hierarchy management, and family record tracking.',
        'Developed legal notice generation, Lok Adalat tracking, and EMI calculation workflows.',
        'Integrated AWS S3 for secure KYC document storage and ImageSharp processing.',
        'Integrated SignalR and WebRTC signaling for real-time remote house-visit video verification.'
      ],
      techStack: ['.NET 8', 'ASP.NET Core Web API', 'Angular 19/20', 'SQL Server', 'Dapper', 'EF Core 8', 'AWS S3', 'iText 7', 'SignalR', 'WebRTC'],
      icon: 'images/logos/nodejs-icon.svg',
      image: 'images/projects/documateplus.jpg',
      bgClass: 'bg-soft-alt-primary'
    },
    {
      id: 'skillup-hrms',
      name: 'KFPL SkillUP & HRMS',
      category: 'Human Resource Management & Learning Platform',
      description: 'An employee lifecycle and learning management application supporting onboarding, employee records, document generation, attendance, and HR operations.',
      contributions: [
        'Developed multi-step employee onboarding using Angular Reactive Forms (personal, family, education, bank, KYC).',
        'Built dynamic HR letter authoring using TinyMCE templates and configurable placeholder replacement.',
        'Developed automated PDF generation, authorized digital signatures, and ZIP packaging.',
        'Implemented employee attendance workflows, broadcast notifications, and management dashboards.',
        'Engineered resignation, exit clearance, and Full & Final (F&F) settlement workflows.',
        'Implemented bulk employee Excel imports using EPPlus with duplicate checks and row-level error logging.',
        'Developed fine-grained role- and user-level permissions with backend resolution and dynamic navigation.'
      ],
      techStack: ['.NET 8', 'Angular 19', 'SQL Server', 'Dapper', 'EF Core 8', 'AWS S3', 'TinyMCE', 'EPPlus', 'iText 7'],
      icon: 'images/logos/laravel.svg',
      image: 'images/projects/skillup_hrms.jpg',
      bgClass: 'bg-soft-alt-success'
    }
  ];

  readonly additionalProjects: AdditionalProject[] = [
    {
      title: 'Online Examination Platform Migration',
      description: 'Migrated an existing enterprise OLTP Java EE legacy examination system to modern Spring Boot REST services and an Angular responsive interface.',
      tech: ['Java', 'Spring Boot', 'Angular', 'REST APIs', 'SQL'],
      icon: 'la-exchange-alt'
    },
    {
      title: 'TMDB Movie Application',
      description: 'Developed an interactive movie discovery and tracking application featuring debounced search, trailer playback, and responsive grids using TMDB API.',
      tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'TMDB API', 'RxJS'],
      icon: 'la-film'
    },
    {
      title: 'WebRTC Video Chat Application',
      description: 'Engineered peer-to-peer real-time video communication with audio/video streaming, chat messaging, and room management using SignalR signaling.',
      tech: ['Angular', '.NET Core', 'SignalR', 'WebRTC'],
      icon: 'la-video'
    },
    {
      title: 'Animated Video Generation Pipeline',
      description: 'Experimented with generative video workflows, automated keyframe prompting, and video-to-animation processing using ComfyUI and Stable Diffusion models.',
      tech: ['Python', 'ComfyUI', 'Stable Diffusion', 'FFmpeg'],
      icon: 'la-magic'
    },
    {
      title: 'Collection Analytics Dashboard',
      description: 'Developed comprehensive operational reporting, financial aggregations, and visual KPI drilldowns using SQL Server analytical queries and dynamic filters.',
      tech: ['SQL Server', 'Stored Procedures', '.NET 8', 'Angular'],
      icon: 'la-chart-line'
    }
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      category: 'Backend Development',
      icon: 'la-server',
      skills: ['C#', '.NET 8', 'ASP.NET Core Web API', 'Java', 'Spring Boot', 'REST API Development', 'Dapper', 'Entity Framework Core', 'ADO.NET', 'LINQ', 'Clean Architecture']
    },
    {
      category: 'Frontend Development',
      icon: 'la-code',
      skills: ['Angular 19/20', 'TypeScript', 'JavaScript', 'RxJS', 'Reactive Forms', 'React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Angular Material']
    },
    {
      category: 'Database & SQL',
      icon: 'la-database',
      skills: ['Microsoft SQL Server', 'MySQL', 'Stored Procedures', 'Views', 'Complex Joins', 'Temporary Tables', 'Table-Valued Parameters (TVPs)', 'Query Optimization', 'Dynamic SQL']
    },
    {
      category: 'Cloud & Integrations',
      icon: 'la-cloud',
      skills: ['AWS S3', 'SignalR', 'WebRTC', 'PhonePe', 'PayNearBy', 'FingPay', 'Payment Gateways', 'QR Code Integration', 'Firebase', 'Zoom API', 'Mappls API']
    },
    {
      category: 'Libraries & Document Processing',
      icon: 'la-file-pdf',
      skills: ['iText 7', 'QuestPDF', 'EPPlus', 'ClosedXML', 'ExcelJS', 'SheetJS', 'ImageSharp', 'TinyMCE']
    },
    {
      category: 'Tools & Environments',
      icon: 'la-tools',
      skills: ['Git', 'GitHub', 'Postman', 'Swagger / OpenAPI', 'Visual Studio', 'VS Code', 'SQL Server Management Studio (SSMS)']
    }
  ];

  readonly educationList: Education[] = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'University of Rajasthan, Jaipur',
      year: '2021 – 2024',
      score: '68%'
    },
    {
      degree: 'Higher Secondary Education (Class XII)',
      institution: 'Shier Jyoti Sah Sec School, Kota',
      year: '2021',
      score: '90%'
    },
    {
      degree: 'Secondary Education (Class X)',
      institution: 'Secondary School, Kota, Rajasthan',
      year: '2019',
      score: '72%'
    }
  ];

  readonly certification: Certification = {
    title: 'Programming, Networking in Java',
    platform: 'Udemy',
    url: 'https://drive.google.com/file/d/1PrisPd4_7Y4jmcUECGt5FKXKLFPMtUZq/view?usp=drive_link'
  };

  readonly services: ServiceItem[] = [
    {
      id: 'backend-api',
      title: 'Backend & REST API Architecture',
      description: 'Designing and building high-performance, scalable RESTful APIs with ASP.NET Core Web API and .NET 8. Expertise in clean layered architecture, dependency injection, and secure authentication.',
      icon: 'la-server',
      skills: ['.NET 8', 'ASP.NET Core Web API', 'Dapper', 'EF Core', 'REST APIs', 'Clean Architecture']
    },
    {
      id: 'frontend-angular',
      title: 'Modern Single Page Applications',
      description: 'Developing reactive, modular, and responsive frontend architectures using Angular 19/20, TypeScript, RxJS, and modern CSS. Focus on performance, state management, and user experience.',
      icon: 'la-desktop',
      skills: ['Angular 19/20', 'TypeScript', 'RxJS', 'Reactive Forms', 'Bootstrap', 'Tailwind CSS']
    },
    {
      id: 'database-sql',
      title: 'Database Design & Query Tuning',
      description: 'Engineering optimized database schemas, stored procedures, table-valued parameters (TVPs), and indexing strategies in Microsoft SQL Server to maximize data throughput and minimize latency.',
      icon: 'la-database',
      skills: ['SQL Server', 'Stored Procedures', 'Table-Valued Parameters', 'Query Optimization', 'Dapper']
    },
    {
      id: 'document-automation',
      title: 'Document Automation & Reporting',
      description: 'End-to-end automated PDF generation, coordinate-based watermarking/stamping, dynamic letter synthesis, and multi-sheet Excel bulk import/export processing for enterprise compliance.',
      icon: 'la-file-alt',
      skills: ['iText 7', 'QuestPDF', 'ClosedXML', 'EPPlus', 'ImageSharp', 'TinyMCE']
    },
    {
      id: 'payment-cloud',
      title: 'Payment Gateways & Cloud Storage',
      description: 'Integrating payment links, dynamic QR codes, webhook verification (PhonePe, FingPay), and scalable file pipelines with AWS S3, including image compression and lifecycle management.',
      icon: 'la-credit-card',
      skills: ['AWS S3', 'Payment Gateways', 'QR Code APIs', 'Webhook Verification', 'Mappls API']
    },
    {
      id: 'realtime-systems',
      title: 'Real-Time Communication & WebRTC',
      description: 'Building interactive real-time systems utilizing SignalR hubs and WebRTC peer connections for live remote video verification, chat messaging, and instant notification systems.',
      icon: 'la-video',
      skills: ['SignalR', 'WebRTC', 'WebSockets', 'Live Audio/Video', 'Push Notifications']
    }
  ];

  readonly blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: 'optimizing-sql-stored-procedures-tvp-dotnet',
      title: 'High-Performance Bulk Operations in .NET 8 using SQL Server TVPs',
      excerpt: 'How Table-Valued Parameters and Dapper helped reduce bulk upload transaction times by over 80% in an enterprise financial application.',
      content: [
        'When handling massive enterprise data uploads—such as loan repayment schedules or insurance claim batches—traditional row-by-row INSERT statements quickly become a severe bottleneck.',
        'In this deep dive, we explore how combining SQL Server Table-Valued Parameters (TVPs) with Dapper in .NET 8 allows you to stream strongly-typed datasets directly into the database engine in a single round-trip.',
        'Key benefits include minimal locking, significant network reduction, transactional atomicity, and consistent throughput even under peak operational hours.'
      ],
      author: 'Sourabh Suman',
      date: '28 Oct 2026',
      readTime: '6 min read',
      tags: ['.NET 8', 'SQL Server', 'Dapper', 'Performance'],
      image: 'images/projects/fieldmateplus.jpg'
    },
    {
      id: 2,
      slug: 'real-time-remote-verification-webrtc-angular-signalr',
      title: 'Building Remote Verification with Angular, SignalR & WebRTC',
      excerpt: 'Architecting peer-to-peer video streaming and document verification for remote field house inspections without third-party recurring SaaS costs.',
      content: [
        'Remote customer verification is critical in loan underwriting and KYC workflows. By orchestrating WebRTC peer connections through a lightweight ASP.NET Core SignalR signaling server, we created a seamless in-browser video inspection experience.',
        'Angular handles the camera controls, reactive UI states, and snapshot captures, while .NET manages signaling room tokens and transmits verified audit snapshots to AWS S3 storage.',
        'This architectural approach delivers secure, low-latency communication directly embedded within the underwriting pipeline.'
      ],
      author: 'Sourabh Suman',
      date: '15 Oct 2026',
      readTime: '8 min read',
      tags: ['Angular', 'WebRTC', 'SignalR', 'AWS S3'],
      image: 'images/projects/documateplus.jpg'
    },
    {
      id: 3,
      slug: 'automated-pdf-coordinate-stamping-itext7',
      title: 'Automated PDF Coordinate Stamping & ZIP Packaging with iText 7',
      excerpt: 'Precision programmatic document stamping, dynamic watermark injection, and automated docket packaging for legal loan documentation.',
      content: [
        'Legal compliance and loan contracts require accurate placement of authorized stamps, signature blocks, and QR validation tokens across variable page formats.',
        'Using iText 7 and .NET 8, we engineered coordinate-based dynamic placement systems that parse PDF metadata, calculate DPI offsets, and inject cryptographic stamps without degrading file quality.',
        'Completed loan dockets are then bundled into encrypted ZIP archives ready for immediate branch execution or archival.'
      ],
      author: 'Sourabh Suman',
      date: '02 Oct 2026',
      readTime: '5 min read',
      tags: ['.NET 8', 'iText 7', 'PDF Automation', 'C#'],
      image: 'images/projects/ensureweb.jpg'
    }
  ];
}
