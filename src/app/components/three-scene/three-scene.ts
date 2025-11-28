import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-scene',
  standalone: true,
  imports: [],
  template: `<div #rendererContainer class="renderer-container"></div>`,
  styles: [`
    .renderer-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1; /* Behind everything */
      pointer-events: none; /* Let clicks pass through */
    }
  `]
})
export class ThreeSceneComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;
  private animationId!: number;

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initThree();
    this.animate();
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener('resize', this.onWindowResize.bind(this));
  }

  private initThree(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene
    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color(0x0a0a0a); // Use CSS background instead for transparency if needed

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15; // Spread
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x00f2ff,
      transparent: true,
      opacity: 0.8,
    });

    this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particles);
  }

  private animate(): void {
    this.ngZone.runOutsideAngular(() => {
      const loop = () => {
        this.animationId = requestAnimationFrame(loop);

        if (this.particles) {
          this.particles.rotation.y += 0.002; // Faster rotation
          this.particles.rotation.x += 0.001;

          // Pulse effect
          const time = Date.now() * 0.001;
          const scale = 1 + Math.sin(time) * 0.1;
          this.particles.scale.set(scale, scale, scale);
        }

        this.renderer.render(this.scene, this.camera);
      };
      loop();
    });
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

