import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggler',
  templateUrl: './dark-mode-toggler.component.html',
  styleUrls: ['./dark-mode-toggler.component.css'],
})
export class DarkModeTogglerComponent {
  handleChecked(event: Event): void {
    const target = event.target as HTMLInputElement; // Explicit type assertion
    if (target?.checked !== undefined) {
      document.body.setAttribute('data-theme', target.checked ? 'dark' : 'light');
    } else {
      console.error('Event target is null or does not have the "checked" property.');
      document.body.setAttribute('data-theme', 'light');
    }
  }
}
