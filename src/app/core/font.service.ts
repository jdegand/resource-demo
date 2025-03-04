import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FontService {
  private fontFamily: string = 'Arial'; // Default font

  setFont(font: string): void {
    this.fontFamily = font;
    document.body.style.fontFamily = font; // Apply font globally to the <body>
  }

  getFont(): string {
    return this.fontFamily;
  }
}

