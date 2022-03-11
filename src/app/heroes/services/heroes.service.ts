import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHeroe } from '../interfaces/heroes.interfaces';
import { environment } from 'src/environments/environment';
import { emptyString } from 'src/app/shared/global';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _apiEndpoint: string = environment.apiEndpoint;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Format an Api URL specifying the 
   * @param url 
   * @param params 
   * @returns 
   */
  formatApiRoute = (route: string = emptyString, params?: string): string => {
    if(route === emptyString) 
      return emptyString; 

    const parsedUrl = this._apiEndpoint.concat("/" + route).trim();
    
    if(!params) 
      return parsedUrl; 

    return parsedUrl.concat("/" + params);
  }

  /**
   * Query all the information from the registered heroes. 
   * @returns Observable with a collection of IHeroe objects. 
   */
  queryAllHeroes = (): Observable<IHeroe[]> => {
    return this.http.get<IHeroe[]>(this.formatApiRoute("heroes"));
  }

  /**
   * Query all the information from a specific heroe. 
   * @param id The hero id.
   * @returns Observable with a IHeroe object. 
   */
  queryHeroeById = (id: string): Observable<IHeroe> => {
    return this.http.get<IHeroe>(this.formatApiRoute("heroes", id));
  }

}
