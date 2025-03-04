/*
import { Component } from '@angular/core';
import { FontService } from '../../../core/font.service';

@Component({
  selector: 'app-font-select',
  imports: [],
  templateUrl: './font-select.component.html',
  styleUrl: './font-select.component.css'
})
export class FontSelectComponent {

  // this is tight coupling 
  // add the font service to home page component instead
  // and use an output for the event here?
  constructor(private fontService: FontService) {}

  onFontChange(event: Event): void {
    const selectedFont = (event.target as HTMLSelectElement).value;
    this.fontService.setFont(selectedFont);
  }

}
*/

import { Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-font-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './font-select.component.html',
  styleUrls: ['./font-select.component.css'],
})

export class FontSelectComponent {
  fonts = ['Serif', 'Sans-Serif', 'Monospace'];
  private document = inject(DOCUMENT);

  fontChange(fontForm: NgForm) {
    this.document.body.setAttribute('class', '');

    const font = fontForm.form.value.font;

    if (font) {
      // set font value as class here
      this.document.body.setAttribute(
        'class',
        font.toLowerCase()
      );
    } else {
      console.warn('Font is undefined.');
      // Handle undefined font case here, if needed
    }
  }
}