import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { shareReplay, tap } from 'rxjs/operators';
import { Country } from '../models/country.model';
import { API_URL } from '../assets/config';


@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  simpleCache = {};

  constructor(private http: HttpClient) {}

  getCountriesForRegion(regionId): Observable<Country[]> {
    const url = API_URL + regionId;
    // tslint:disable-next-line:no-console
    console.log('this.simpleCache[regionId]:', this.simpleCache[regionId], !!this.simpleCache[regionId]);
    if (this.simpleCache[regionId]) {
      return this.simpleCache[regionId];
    }
    this.simpleCache[regionId] = this.http.get(url) as Observable<Country[]>;
    return this.simpleCache[regionId];
  }
}
