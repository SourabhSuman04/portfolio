import { Component, AfterViewInit, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('heroTitle') heroTitle!: ElementRef;
  @ViewChild('heroSubtitle') heroSubtitle!: ElementRef;
  @ViewChild('ctaButton') ctaButton!: ElementRef;

  roles: string[] = [
    'Full Stack Developer',
    'Angular Specialist',
    'Creative Thinker',
    'Problem Solver'
  ];
  currentRoleIndex = 0;
  currentRole = this.roles[0];
  private intervalId: any;

  ngOnInit() {
    this.startTextAnimation();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startTextAnimation() {
    this.intervalId = setInterval(() => {
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      this.currentRole = this.roles[this.currentRoleIndex];

      // Optional: Add GSAP animation for smooth transition if needed
      if (this.heroSubtitle) {
        gsap.fromTo(this.heroSubtitle.nativeElement,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      }
    }, 3000); // Change every 3 seconds
  }

  ngAfterViewInit() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(this.heroTitle.nativeElement, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5
    })
      .from(this.heroSubtitle.nativeElement, {
        y: 30,
        opacity: 0,
        duration: 1
      }, '-=0.5')
      .from(this.ctaButton.nativeElement, {
        y: 20,
        opacity: 0,
        duration: 0.8
      }, '-=0.5');
  }
}
