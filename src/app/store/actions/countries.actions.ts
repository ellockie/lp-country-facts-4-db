/* eslint-disable max-classes-per-file */
import { Action } from '@ngrx/store';
import { Country, AreaSelectorOption, Region } from '../../models';


export const LOAD_COUNTRIES = '[Countries] Load countries';
export const COUNTRIES_LOAD_SUCCESS = '[Countries] Load Success';
export const COUNTRIES_LOAD_ERROR = '[Countries] Load Error';
export const COUNTRY_SELECT = '[Countries] Select country';


export class LoadCountriesForRegion implements Action {
  readonly type = LOAD_COUNTRIES;

  constructor(public payload: Region) {}
}

export class CountriesLoadSuccess implements Action {
  readonly type = COUNTRIES_LOAD_SUCCESS;

  constructor(public payload: {
    region: Region;
    countries: Country[];
    countryOptions: AreaSelectorOption[],
  }) {}
}

export class CountriesLoadError implements Action {
  readonly type = COUNTRIES_LOAD_ERROR;

  constructor(public payload: any) {
    // tslint:disable-next-line:no-console
    console.error('Data fetching error:', payload);
  }
}

export class SelectCountry implements Action {
  readonly type = COUNTRY_SELECT;

  constructor(public payload: string) {}
}
