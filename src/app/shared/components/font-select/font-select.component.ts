import { Component, inject } from '@angular/core';
import { FontService } from '../../../core/font.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-font-select',
  imports: [FormsModule],
  templateUrl: './font-select.component.html',
  styleUrls: ['./font-select.component.css'],
})
export class FontSelectComponent {
  fonts = ['Serif', 'Sans-Serif', 'Monospace'];

  private fontService = inject(FontService);

  fontChange(font: string): void {
    if (font) {
      this.fontService.setFont(font);
    }
  }
}
