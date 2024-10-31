import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foyer } from '../foyer';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = 'http://192.168.1.24:8089/tpfoyer/foyer';

  constructor(private http: HttpClient) {}

  getFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.apiUrl}/retrieve-all-foyers`);
  }

  addFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.apiUrl}/add-foyer`, foyer);
  }
}
