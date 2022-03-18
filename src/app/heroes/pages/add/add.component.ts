import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  heroCreatedMessage,
  heroDeleteConfirmationMessage,
  heroDeletedMessage,
  heroUpdatedMessage,
} from 'src/app/shared/global';
import { ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component';
import { IHero } from '../../interfaces/heroes.interfaces';
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

  // Delete superhero flag, by default is false, so red flag.
  deleteGreenFlag: boolean;

  constructor(
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog
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

    this.deleteGreenFlag = false;
  }

  ngOnInit(): void {
    this.publishers = ['DC Comics', 'Marvel Comics'];

    this.tryLoadHeroFromRoute();
  }

  /**
   * Responsible of adding or updating a superhero depending of the scenario.
   */
  processSuperHero = () => {
    this.hero.id ? this.updateSuperHero() : this.addSuperHero();
  };

  /**
   * Adds a superhero using the superheroes service passing as parameter the
   * hero defined as a global variable.
   */
  addSuperHero = () => {
    this._heroesService.createSuperhero(this.hero).subscribe({
      next: (heroAdded: IHero) => {
        this.hero = heroAdded;
        this.displaySnackMessage(heroCreatedMessage, 'Close', 2500);
        this.resetFormFields();
      },
    });
  };

  /**
   * Deletes a superhero using the superheroes service passing as parameter the
   * hero defined as a global variable.
   */
  deleteSuperHero = () => {
    this.displayDeleteConfirmationDialog(heroDeleteConfirmationMessage)
      .pipe(
        switchMap((result: boolean) => {
          if (result) return this._heroesService.deleteSuperhero(this.hero);
          else return new Observable();
        })
      )
      .subscribe({
        next: _ => {
          this._router.navigate(['/heroes/list/']);
          this.displaySnackMessage(heroDeletedMessage, 'Close', 2500);
        },
      });
  };

  /**
   * Updates a superhero using the superheroes service passing as parameter the
   * hero defined as a global variable.
   */
  updateSuperHero = () => {
    this._heroesService.updateSuperhero(this.hero).subscribe({
      next: (heroUpdated: IHero) => {
        this.hero = heroUpdated;
        this.displaySnackMessage(heroUpdatedMessage, 'Close', 2500);
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
        },
      });
  };

  displaySnackMessage = (
    message: string,
    action: string,
    duration: number = -1
  ): void => {
    const toast = this._snackBar;

    duration !== -1
      ? toast.open(message, action, {
          duration,
        })
      : toast.open(message, action);
  };

  displayDeleteConfirmationDialog = (message: string): Observable<boolean> => {
    const dialogRef = this._dialog.open(ConfirmationDialogComponent, {
      data: { message, acceptanceMessage: 'Yes', negationMessage: 'Cancel' },
    });

    return dialogRef.afterClosed();
  };

  resetFormFields = () => {
    this.hero = {};
  };
}
