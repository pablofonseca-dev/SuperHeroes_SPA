import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHero } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroeCardComponent {
  @Input()
  hero: IHero | undefined;

  @Output()
  imageRendered: EventEmitter<boolean>;

  constructor() {
    this.imageRendered = new EventEmitter();
  }

  onImageRendered = () => {
    this.imageRendered.emit(true);
  };
}
