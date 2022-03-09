import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHeroe } from '../interfaces/heroes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _servicePort: string = "3004";
  private _serviceURL: string = `http://localhost:${this._servicePort}`

  constructor(
    private http: HttpClient
  ) { }


  /**
   * Query all the information from the registered heroes. 
   * @returns Observable with a collection of IHeroe objects. 
   */
  queryAllHeroes = (): Observable<IHeroe[]> => {
    return this.http.get<IHeroe[]>(`${this._serviceURL}/heroes`);
  }

  /**
   * Query all the information from a specific heroe. 
   * @param id The hero id.
   * @returns Observable with a IHeroe object. 
   */
  queryHeroeById = (id: string): Observable<IHeroe> => {
    return this.http.get<IHeroe>(`${this._serviceURL}/heroes/${id}`.trim());
  }

}
