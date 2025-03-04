import { Component } from '@angular/core';
import { FontSelectComponent } from '../font-select/font-select.component';
import { DarkModeTogglerComponent } from '../dark-mode-toggler/dark-mode-toggler.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [FontSelectComponent, DarkModeTogglerComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent { }
