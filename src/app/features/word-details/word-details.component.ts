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
  private BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  // Define a resource that depends on the word
  wordResource = resource<Word[], { query?: string } | undefined>({
    request: () => {
      const query = this.word();
      return query ? { query } : undefined; // Return undefined if there is no search term
    },
    loader: async ({ request, abortSignal }) => {
      // Check if request is undefined or if query is undefined
      if (!request || !request.query) {
        return []; // Return an empty array if no query is provided
      }

      const response = await fetch(`${this.BASE_URL}${request.query}`, {
        signal: abortSignal
      });

      // Handle response errors
      if (!response.ok) {
        throw new Error(`Could not fetch...`);
      }

      return await response.json();
    }
  });

  findAudio(parentList: Phonetic[]) {
    if (!Array.isArray(parentList)) {
      throw new Error("parentList should be an array");
    }

    return parentList.filter(item => item?.audio);
  }

}
