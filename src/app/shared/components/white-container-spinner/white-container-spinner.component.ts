import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-white-container-spinner',
  templateUrl: './white-container-spinner.component.html',
  styles: [],
})
export class WhiteContainerSpinnerComponent {
  @Input() displayContainer: boolean;

  constructor() {
    this.displayContainer = false;
  }
}
