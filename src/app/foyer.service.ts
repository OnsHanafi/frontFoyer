import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foyer } from './Foyer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = 'http://localhost:8089/tpfoyer/foyer';

  constructor(private http: HttpClient) {}

  getFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.apiUrl}/retrieve-all-foyers`);
  }

  addFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.apiUrl}/add-foyer`, foyer);
  }
}
