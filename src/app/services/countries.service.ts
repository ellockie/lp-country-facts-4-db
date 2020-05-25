import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Country } from '../models';
import { API_URL } from '../assets/config';


@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountriesForRegion(regionId): Observable<Country[]> {
    const url = API_URL + regionId;
    return this.http.get(url) as Observable<Country[]>;
  }
}
