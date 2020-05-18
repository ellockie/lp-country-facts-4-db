import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { take } from 'rxjs/operators';
import { AreaSelectorOption, selectorLabels } from '../../models/display.model';
import * as fromStore from '../../store';


@Component({
  selector: 'app-selector-regions',
  templateUrl: './app-selector-regions.component.html',
})
export default class AppSelectorRegionsComponent implements OnInit {
  regions$: Observable<AreaSelectorOption[]>;

  label: string = selectorLabels.region;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit(): void {
    this.regions$ = this.store.select(fromStore.selectRegions);
  }

  onRegionChanged(regionId: string) {
    this.store
      .pipe(take(1))
      .subscribe((s) => {
        const countries = s.countryViewFeature.countriesByRegions[regionId];
        if (countries) {
          this.store.dispatch(new fromStore.CountriesLoadSuccess({
            region: regionId,
            countries,
          }));
        } else {
          this.store.dispatch(new fromStore.LoadCountriesForRegion(regionId));
        }
      });
  }
}
