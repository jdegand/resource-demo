import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Meaning } from './meaning.model';

@Component({
  selector: 'app-meaning',
  imports: [],
  templateUrl: './meaning.component.html',
  styleUrls: ['./meaning.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeaningComponent {
  meaning = input.required<Meaning>();
}
