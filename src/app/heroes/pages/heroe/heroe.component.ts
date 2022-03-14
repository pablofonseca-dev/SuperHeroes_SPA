import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { IHeroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent implements OnInit {
  heroe: IHeroe | undefined;

  heroeId: string;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.heroeId = '';
  }

  ngOnInit(): void {
    this.loadHeroeId();
    this.queryHeroeDataFromService();
  }

  /**
   * Load the heroe Id passed from the Activated Route.
   */
  loadHeroeId = () => {
    /**
     * Before subscribing the Observable is necessary
     * to pass the value through a pipe to parse it from an Object of {id: "db-batman"}
     * to s simple String like db-batman.
     */
    this._activatedRoute.params
      .pipe(
        map(params => {
          const { id } = params;
          return id;
        })
      )
      .subscribe(id => (this.heroeId = id));
  };

  /**
   * Query all the information of a heroe using the heroe id.
   */
  queryHeroeDataFromService = () => {
    this._heroesService.queryHeroeById(this.heroeId).subscribe({
      next: heroe => {
        this.heroe = heroe;
      },
    });
  };

  /**
   * Use the Angular Router instance to navigate to the previous page.
   */
  navigateBack = () => {
    this._router.navigate(['/heroes/list']);
  };
}
