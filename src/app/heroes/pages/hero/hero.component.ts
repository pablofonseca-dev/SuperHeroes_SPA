import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { IHero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() hero: IHero | undefined;
  @Input() canGoBack: boolean | undefined;

  heroId: string;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this.heroId = '';
  }

  ngOnInit(): void {
    if (!this.hero) {
      this.loadHeroeId();
      this.queryHeroeDataFromService();
      this.canGoBack = true;
    }
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
      .subscribe(id => (this.heroId = id));
  };

  /**
   * Query all the information of a heroe using the heroe id.
   */
  queryHeroeDataFromService = () => {
    this._heroesService.queryHeroeById(this.heroId).subscribe({
      next: hero => {
        this.hero = hero;
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
