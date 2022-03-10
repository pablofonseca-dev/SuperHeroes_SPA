import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHeroe } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.scss']
})
export class HeroeCardComponent implements OnInit {
  
  @Input()
  heroe!: IHeroe; 

  @Output() 
  imageRendered: EventEmitter<boolean>;
  
  constructor() {
    this.imageRendered = new EventEmitter(); 
  }

  ngOnInit(): void {
    
  }

  onImageRendered = () => {
    this.imageRendered.emit(true); 
  }

}
