import { Injectable } from '@angular/core';
// eslint-disable-next-line no-unused-vars
import { HttpClient } from '@angular/common/http';

// eslint-disable-next-line no-unused-vars
import { Observable } from 'rxjs';

// eslint-disable-next-line no-unused-vars
import { Country } from '../models/country.model';
import { API_URL } from '../assets/config';


@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  // eslint-disable-next-line no-unused-vars,no-empty-function,no-useless-constructor
  constructor(private http: HttpClient) { }

  getCountriesForRegion(regionId): Observable<Country[]> {
    const url = API_URL + regionId;
    return this.http.get(url) as Observable<Country[]>;
  }
}
