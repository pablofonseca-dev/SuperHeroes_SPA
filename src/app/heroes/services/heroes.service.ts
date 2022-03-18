import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHero } from '../interfaces/heroes.interfaces';
import { environment } from 'src/environments/environment';
import { emptyString } from 'src/app/shared/global';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private _apiEndpoint: string = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  /**
   * Format an Api URL specifying the
   * @param url
   * @param params
   * @returns
   */
  formatApiRoute = (route: string = emptyString, params?: string): string => {
    if (route === emptyString) return emptyString;

    const parsedUrl = this._apiEndpoint.concat('/' + route).trim();

    if (!params) return parsedUrl;

    return parsedUrl.concat('/' + params);
  };

  /**
   * Query all the information from the registered heroes.
   * @returns Observable with a collection of IHero objects.
   */
  queryAllHeroes = (): Observable<IHero[]> => {
    return this.http.get<IHero[]>(this.formatApiRoute('heroes'));
  };

  /**
   * Query all the information from a specific heroe.
   * @param id The hero id.
   * @returns Observable with a IHero object.
   */
  queryHeroeById = (id: string): Observable<IHero> => {
    return this.http.get<IHero>(this.formatApiRoute('heroes', id));
  };

  /**
   * Query all the information of the heroes that match the
   * specified search term. If the search term matches in any of the
   * properties of a superhero is going to be added to the results.
   * @param searchTerm The search term value.
   * @returns Observable with a collection of IHero objects.
   */
  queryHeroesByTerm = (searchTerm: string): Observable<IHero[]> => {
    return this.http.get<IHero[]>(
      this.formatApiRoute(`heroes?q=${searchTerm}&_limit=5`)
    );
  };

  /**
   * Fire a Post Request to create a new Superhero.
   * @param newHero All the information of the new Superhero.
   * @returns Observable with a IHero object containing the information of the
   * hero that was created.
   */
  createSuperhero = (newHero: IHero): Observable<IHero> => {
    return this.http.post<IHero>(this.formatApiRoute(`heroes`), newHero);
  };

  /**
   * Fire a Put Request to update a Superhero.
   * @param newHeroData All the information related to the Superhero that is going to be updated.
   * @returns Observable with a IHero object containing the information of the
   * hero that was updated.
   */
  updateSuperhero = (newHeroData: IHero): Observable<IHero> => {
    return this.http.put<IHero>(
      this.formatApiRoute(`heroes`, newHeroData.id),
      newHeroData
    );
  };

  /**
   * Fire a Delete Request to delete a Superhero.
   * @param newHero All the information related to the Superhero that is going to be deleted.
   * @returns Observable with a IHero object containing the information of the
   * hero that was deleted.
   */
  deleteSuperhero = (hero: any): Observable<IHero> => {
    return this.http.delete<any>(this.formatApiRoute(`heroes`, hero.id));
  };
}
