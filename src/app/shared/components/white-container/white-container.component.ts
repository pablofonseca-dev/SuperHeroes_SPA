import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-white-container',
  templateUrl: './white-container.component.html',
  styleUrls: ['./white-container.component.scss'],
})
export class WhiteContainerComponent {
  @Input() displayContainer: boolean;

  constructor() {
    this.displayContainer = true;
  }

  destroyEvent: EventEmitter<boolean> = new EventEmitter();
}
