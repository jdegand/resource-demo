import { Component, OnDestroy, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit, OnDestroy, AfterViewInit {
  audioSrc = input.required<string>();

  playing = false;

  private audio?: HTMLAudioElement;
  private endedListener?: () => void;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.audioSrc) {
      this.audio = new Audio(this.audioSrc());
    } else {
      this.audio = undefined;
    }
  }

  isPlaying(): void {
    if (!this.audio) {
      return;
    }

    this.playing = !this.playing;
    if (this.playing) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  ngAfterViewInit(): void {
    if (!this.audio) {
      console.warn('Audio object is not initialized.');
      return;
    }

    // Check if the event listener is already added
    if (!this.endedListener) {
      this.endedListener = () => {
        this.playing = false;
        this.cdr.detectChanges(); // Trigger change detection
      };
      this.audio.addEventListener('ended', this.endedListener);
    } else {
      console.log('Event listener already exists.');
    }
  }

  ngOnDestroy(): void {
    if (this.audio && this.endedListener) {
      this.audio.removeEventListener('ended', this.endedListener);
    }
  }
}
