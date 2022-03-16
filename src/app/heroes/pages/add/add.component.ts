import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { IHero, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroPicturePipe } from '../../pipes/heroPicture/hero-picture.pipe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  // List of publishers, this value can be updated in the future.
  publishers: string[];

  // Hero object used to display its properties in the UI, and edit or update its values.
  hero: IHero;

  // Hero picture URL, is handled using the Hero Picture Pipe.
  displayImageURL: string;

  constructor(
    private _heroPipe: HeroPicturePipe,
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.publishers = [];

    this.hero = {
      superhero: '',
      characters: '',
      alter_ego: '',
      first_appearance: '',
      publisher: '',
      alt_img: '',
    };

    this.displayImageURL = '';
  }

  ngOnInit(): void {
    this.displayImageURL = this._heroPipe.transform(this.hero);

    this.publishers = ['DC Comics', 'Marvel Comics'];

    this.tryLoadHeroFromRoute();
  }

  /**
   * Loads the image in the form using the custom Hero Picture Pipe.
   * This method can be called to refresh the image value in the form.
   */
  @ViewChild('imageSource') imageSrc!: ElementRef<HTMLInputElement>;
  loadImage = () => {
    const imageSource = this.imageSrc.nativeElement.value;
    this.hero.alt_img = imageSource;
    this.displayImageURL = this._heroPipe.transform(this.hero);
  };

  /**
   * Adds a superhero using the superheroes service passing as parameter the
   * hero defined as a global variable.
   */
  addSuperHero = () => {
    this._heroesService.createSuperhero(this.hero).subscribe({
      next: (heroAdded: IHero) => {
        this.hero = heroAdded;
      },
    });
  };

  /**
   * Tries to load the hero data when the page is used as an editable Hero page.
   * Is necessary to have the Hero ID as part of the parameters of the Activated Route.
   */
  tryLoadHeroFromRoute = (): void => {
    let idIsDefined: boolean = false;

    this._activatedRoute.params.subscribe({
      next: ({ id }) => (idIsDefined = id),
    });

    if (!idIsDefined) return;

    this._activatedRoute.params
      .pipe(switchMap(({ id }) => this._heroesService.queryHeroeById(id)))
      .subscribe({
        next: (hero: IHero) => {
          this.hero = hero;
          this.loadImage();
        },
      });
  };
}
