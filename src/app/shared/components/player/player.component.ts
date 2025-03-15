import { Component, ChangeDetectionStrategy, ElementRef, input, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent {
  audioSrc = input.required<string>();
  audioRef = viewChild.required<ElementRef<HTMLAudioElement>>('audioRef');
  isPlaying = signal<boolean>(false);

  togglePlayPause(): void {
    const audio = this.audioRef().nativeElement;

    if (audio.paused) {
      audio.play();
      this.isPlaying.set(true);
    } else {
      audio.pause();
      this.isPlaying.set(false);
    }
  }

  onAudioEnded(): void {
    this.isPlaying.set(false);
  }
}
