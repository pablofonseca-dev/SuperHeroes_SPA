import { Component, OnInit } from '@angular/core';
import { IRouterLink } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  links: IRouterLink[] = [];

  constructor() {}

  ngOnInit(): void {
    this.links = [
      {
        description: 'Heroes List',
        path: './list',
        icon: 'label',
      },
      {
        description: 'Add Hero',
        path: './add',
        icon: 'add',
      },
      {
        description: 'Search Hero',
        path: './search',
        icon: 'search',
      },
    ];
  }
}
