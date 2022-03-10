import { Component, HostListener, Input, OnChanges, OnDestroy, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-white-container',
  templateUrl: './white-container.component.html',
  styleUrls: ['./white-container.component.scss']
})
export class WhiteContainerComponent implements OnInit {

  @Input() displayContainer: boolean; 

  constructor() { 
    this.displayContainer = true; 
  }

  destroyEvent: EventEmitter<boolean> = new EventEmitter(); 

  ngOnInit(): void {
  }
}
