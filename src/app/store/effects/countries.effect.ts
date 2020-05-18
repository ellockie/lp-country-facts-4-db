import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as fromServices from '../../services';
import * as countryActions from '../actions/countries.actions';
import { LoadCountriesForRegion } from '../actions';


@Injectable()
export default class CountriesEffect {
  constructor(
    private actions$: Actions,
    private countriesService: fromServices.CountriesService,
  ) {}

  // effects need to dispatch an action, unless suppressed in the decorator
  @Effect()
  loadCountries$ = this.actions$
    .pipe(
      ofType(countryActions.LOAD_COUNTRIES),
      switchMap((action: LoadCountriesForRegion) => this.countriesService
        .getCountriesForRegion(action.payload)
        .pipe(
          map((countries) => new countryActions.CountriesLoadSuccess({
            region: action.payload,
            countries,
          })),
          catchError((error) => of(new countryActions.CountriesLoadError(error))),
        )),
      catchError((error) => of(new countryActions.CountriesLoadError(error))),
    );
}
