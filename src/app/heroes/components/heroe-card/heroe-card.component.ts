import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHeroe } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.scss'],
})
export class HeroeCardComponent {
  @Input()
  heroe!: IHeroe;

  @Output()
  imageRendered: EventEmitter<boolean>;

  constructor() {
    this.imageRendered = new EventEmitter();
  }

  onImageRendered = () => {
    this.imageRendered.emit(true);
  };
}
