/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggler',
  templateUrl: './dark-mode-toggler.component.html',
  styleUrls: ['./dark-mode-toggler.component.css'],
})
export class DarkModeTogglerComponent {
  /* removed else logic as added "data-theme" attribute in index.html 
  handleChecked(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (this.isCheckbox(target)) {
      document.body.setAttribute('data-theme', target.checked ? 'dark' : 'light');
    }
  }

  private isCheckbox(target: EventTarget | null): target is HTMLInputElement {
    return (target as HTMLInputElement)?.type === 'checkbox'
  }
}
*/

import { Component } from '@angular/core';
import { ThemeService } from '../../../core/theme.service';

@Component({
  selector: 'app-dark-mode-toggler',
  templateUrl: './dark-mode-toggler.component.html',
  styleUrls: ['./dark-mode-toggler.component.css'],
})
export class DarkModeTogglerComponent {
  constructor(private themeService: ThemeService) {}

  handleChecked(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (this.isCheckbox(target)) {
      this.themeService.toggleTheme(target.checked);
    }
  }

  private isCheckbox(target: EventTarget | null): target is HTMLInputElement {
    return (target as HTMLInputElement)?.type === 'checkbox';
  }
}
