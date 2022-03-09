import { Component, Input, OnInit } from '@angular/core';
import { IHeroe } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.scss']
})
export class HeroeCardComponent implements OnInit {
  
  @Input()
  heroe!: IHeroe; 

  constructor() { }

  ngOnInit(): void {
    
  }

}
