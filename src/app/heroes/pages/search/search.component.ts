import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IHero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

/**
 * @title Heroe Autocomplete Search
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchableHeroes: IHero[] = [];

  searchTerm: string = '';

  heroData: IHero | undefined;

  heroesFound: boolean | undefined;

  constructor(
    private _heroesService: HeroesService,
    private _snackBar: MatSnackBar
  ) {}

  onSearchHandler = () => {
    this.heroData = {};

    if (!(this.searchTerm.length > 0)) {
      this.searchableHeroes = [];
      return;
    }

    this._heroesService.queryHeroesByTerm(this.searchTerm).subscribe({
      next: superheroes => {
        switch (superheroes.length) {
          case 0:
            this.heroesFound = false;
            this.searchableHeroes = [];
            this.popUpSnackBar('No hero found', 'Close');
            break;
          default:
            this.searchableHeroes = superheroes;
            this.closeSnackBar();
        }
      },
    });
  };

  onHeroSelected = (heroSelected: MatAutocompleteSelectedEvent) => {
    this.heroData = heroSelected.option.value;
    this.searchTerm = this.heroData?.superhero!;

    this._heroesService.queryHeroeById(this.heroData?.id || '').subscribe({
      next: hero => (this.heroData = hero),
    });
  };

  popUpSnackBar = (message: string, action: string) => {
    this._snackBar.open(message, action);
  };

  closeSnackBar = () => {
    this._snackBar.dismiss();
  };
}
