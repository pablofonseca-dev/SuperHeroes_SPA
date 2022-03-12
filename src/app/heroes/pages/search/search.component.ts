import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { IHeroe } from '../../interfaces/heroes.interfaces';

/**
 * @title Heroe Autocomplete Search
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchableHeroes: IHeroe[] = [];
  
  ngOnInit() {
    
  }

}
