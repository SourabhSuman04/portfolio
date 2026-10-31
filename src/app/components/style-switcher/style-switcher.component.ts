import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-style-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './style-switcher.component.html',
  styleUrls: ['./style-switcher.component.scss']
})
export class StyleSwitcherComponent implements OnInit {
  isOpen: boolean = false;
  currentColor: string = 'default';

  ngOnInit() {
    const savedColor = localStorage.getItem('selfown-theme-color');
    if (savedColor) {
      this.currentColor = savedColor;
      this.applyColor(savedColor);
    }
  }

  toggleSwitcher(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.isOpen = !this.isOpen;
  }

  setColor(color: string, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.currentColor = color;
    localStorage.setItem('selfown-theme-color', color);
    this.applyColor(color);
    this.isOpen = false;
  }

  private applyColor(color: string) {
    const colorOpt = document.getElementById('color-opt') as HTMLLinkElement;
    if (colorOpt) {
      colorOpt.href = `css/colors/${color}.css`;
    }
  }
}
