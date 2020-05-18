import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';

import { Country } from '../../models/country.model';
import { Currency } from '../../models/currency.model';


@Component({
  selector: 'app-country-info',
  templateUrl: './app-country-info.component.html',
  styleUrls: ['./app-country-info.component.less'],
})
export default class AppCountryInfoComponent implements OnInit {
  region$: Observable<string>;

  country$: Observable<Country>;

  loadingError: Observable<boolean>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit(): void {
    this.country$ = this.store.select(fromStore.selectCountry);
    this.region$ = this.store.select(fromStore.selectRegion);
    this.loadingError = this.store.select(fromStore.selectError);
  }

  getCurrencyName(currency: Currency) { return currency.name; }
}
