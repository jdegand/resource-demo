import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/theme.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template: `<div class="app__wrapper">
              <app-navbar />
              <router-outlet />
            </div>`,
  styles: [`
        @media (min-width: 1024px) {
            .app__wrapper {
                max-width: 800px;
                margin: 0 auto;
            }
        }
    `]
})
export class AppComponent {
  constructor(private themeService: ThemeService) { }
}
