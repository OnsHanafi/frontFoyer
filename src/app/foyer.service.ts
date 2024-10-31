import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foyer } from '../foyer';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.apiUrl}retrieve-all-foyers`);
  }

  addFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.apiUrl}add-foyer`, foyer);
  }
}
