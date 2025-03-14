import { Component, input, resource } from '@angular/core';
import { PlayerComponent } from '../../shared/components/player/player.component';
import { MeaningComponent } from '../../shared/components/meaning/meaning.component';
import { SourceComponent } from '../../shared/components/source/source.component';
import { Phonetic, Word } from './word-details.model';

@Component({
  selector: 'app-word-details',
  imports: [PlayerComponent, MeaningComponent, SourceComponent],
  templateUrl: './word-details.component.html',
  styleUrl: './word-details.component.css'
})
export class WordDetailsComponent {
  word = input.required<string>();
  private readonly BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  wordResource = resource({
    request: () => ({ query: this.word() }),
    loader: async ({ request, abortSignal }): Promise<Word[]> => {
      const response = await fetch(`${this.BASE_URL}${request.query}`, { signal: abortSignal });

      if (!response.ok) {
        throw new Error(`Could not fetch...`);
      }

      return await response.json();
    },
  });

  findAudio(parentList: Phonetic[]) {
    return parentList.filter(item => item?.audio);
  }

}
