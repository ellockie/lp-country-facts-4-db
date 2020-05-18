import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCountriesReducer from './countries.reducer';

export interface AppState {
  countryViewFeature: fromCountriesReducer.CountriesState;
}

export const reducers: ActionReducerMap<AppState> = {
  countryViewFeature: fromCountriesReducer.countriesReducer,
};


// Selectors

export const selectFeature = (state: AppState) => state.countryViewFeature;

export const selectRegions = createSelector(
  selectFeature,
  fromCountriesReducer.getRegionOptions,
);

export const selectCountryOptions = createSelector(
  selectFeature,
  fromCountriesReducer.getCountryOptions,
);

export const selectCountry = createSelector(
  selectFeature,
  fromCountriesReducer.getSelectedCountry,
);

export const selectRegion = createSelector(
  selectFeature,
  fromCountriesReducer.getSelectedRegion,
);

export const selectError = createSelector(
  selectFeature,
  fromCountriesReducer.getError,
);

export const selectLoading = createSelector(
  selectFeature,
  fromCountriesReducer.getLoadingInProgress,
);
