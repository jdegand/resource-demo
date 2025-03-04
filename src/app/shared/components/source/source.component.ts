import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-source',
  imports: [],
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceComponent {
  source = input.required<string>();
}