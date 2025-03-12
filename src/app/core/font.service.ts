import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FontService {
  private fontFamily: string = ''; // leave empty so Select Font is displayed in template

  setFont(font: string): void {
    this.fontFamily = font;
    document.body.style.fontFamily = font; // Apply font globally to the <body>
  }
}
