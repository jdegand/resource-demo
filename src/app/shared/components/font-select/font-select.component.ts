import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-font-select',
  imports: [FormsModule],
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