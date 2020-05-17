import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';

import { Country } from '../../models/country.model';


@Component({
  selector: 'db-country-info',
  templateUrl: './db-country-info.component.html',
})
export default class DbCountryInfoComponent implements OnInit {
  country$: Observable<Country>;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
    this.country$ = this.store.select(fromStore.selectCountry);
  }
}
