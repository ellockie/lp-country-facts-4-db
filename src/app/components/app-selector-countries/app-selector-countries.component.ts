import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AreaSelectorOption, selectorLabels } from '../../models/display.model';
import * as fromStore from '../../store';


@Component({
  selector: 'app-selector-countries',
  templateUrl: './app-selector-countries.component.html',
})
export default class AppSelectorCountriesComponent implements OnInit {
  countries$: Observable<AreaSelectorOption[]>;

  label: string = selectorLabels.country;

  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
    this.countries$ = this.store.select(fromStore.selectCountryOptions);
  }

  onRegionChanged(countryId: string) {
    this.store.dispatch(new fromStore.SelectCountry(countryId));
  }
}
