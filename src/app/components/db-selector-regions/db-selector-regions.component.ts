import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AreaSelectorOption, selectorLabels } from '../../models/display.model';
import * as fromStore from '../../store';


@Component({
  selector: 'db-selector-regions',
  templateUrl: './db-selector-regions.component.html',
})
export default class DbSelectorRegionsComponent implements OnInit {
  regions$: Observable<AreaSelectorOption[]>;

  label: string = selectorLabels.region;

  // eslint-disable-next-line no-unused-vars,no-useless-constructor,no-empty-function
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {
    this.regions$ = this.store.select(fromStore.selectRegions);
  }

  onRegionChanged(regionId: string) {
    this.store.dispatch(new fromStore.LoadCountriesForRegion(regionId));
  }
}
