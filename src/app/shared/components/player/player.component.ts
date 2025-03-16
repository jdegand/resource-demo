import { ChangeDetectionStrategy, Component, ElementRef, input, signal, viewChild } from '@angular/core';

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

  // Updated properties to match the HTML
  currentShape = signal<string>('M8,5V19L19,12L8,5Z');
  currentStatus = signal<string>('play');

  togglePlayPause(): void {
    const audio = this.audioRef().nativeElement;

    if (audio.paused) {
      audio.play();
      this.isPlaying.set(true);
      this.updateState('playing', 'M14,19H18V5H14M6,19H10V5H6V19Z');
    } else {
      audio.pause();
      this.isPlaying.set(false);
      this.updateState('paused', 'M8,5V19L19,12L8,5Z');
    }
  }

  onAudioEnded(): void {
    this.isPlaying.set(false);
    this.updateState('paused', 'M8,5V19L19,12L8,5Z');
  }

  private updateState(status: string, shape: string): void {
    this.currentStatus.set(status);
    this.currentShape.set(shape);
  }
}
