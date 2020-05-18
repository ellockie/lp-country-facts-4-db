// eslint-disable-next-line no-unused-vars
import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCountries from './countries.reducer';

export interface AppState {
  countryViewFeature: fromCountries.CountriesState;
}

export const reducers: ActionReducerMap<AppState> = {
  countryViewFeature: fromCountries.countriesReducer,
};


// Selectors

export const selectFeature = (state: AppState) => state.countryViewFeature;

export const selectRegions = createSelector(
  selectFeature,
  fromCountries.getRegionOptions,
);

export const selectCountryOptions = createSelector(
  selectFeature,
  fromCountries.getCountryOptions,
);

export const selectCountry = createSelector(
  selectFeature,
  fromCountries.getSelectedCountry,
);

export const selectRegion = createSelector(
  selectFeature,
  fromCountries.getSelectedRegion,
);
