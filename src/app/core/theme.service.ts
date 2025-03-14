import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themeAttribute = 'data-theme';
  private readonly lightTheme = 'light';
  private readonly darkTheme = 'dark';

  constructor() {
    this.setInitialTheme();
  }

  private setInitialTheme(): void {
    const initialTheme = document.body.getAttribute(this.themeAttribute) ?? this.lightTheme;
    this.setTheme(initialTheme);
  }

  setTheme(theme: string): void {
    document.body.setAttribute(this.themeAttribute, theme);
  }

  toggleTheme(isDarkMode: boolean): void {
    this.setTheme(isDarkMode ? this.darkTheme : this.lightTheme);
  }
}
