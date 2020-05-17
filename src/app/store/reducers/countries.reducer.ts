import { createReducer, on } from '@ngrx/store';
import * as countryActions from '../actions';
import { Country } from '../../models/country.model';
import { AreaSelectorOption } from '../../models/display.model';
import * as fromServices from '../../services';


export interface CountriesState {
  countries: Country[];
  regionOptions: AreaSelectorOption[];
  countryOptions: AreaSelectorOption[];
  selectedCountry: Country;
  loading: boolean;
  loaded: boolean;
  loadingError: boolean;
}

export const initialState: CountriesState = {
  countries: [],
  regionOptions: [
    { value: 'asia', viewValue: 'Asia' },
    { value: 'europe', viewValue: 'Europe' },
  ],
  countryOptions: [],
  selectedCountry: null,
  loading: false,
  loaded: false,
  loadingError: false,
};

// TODO: move to a service
const selectCountry = (countries: Country[], countryId: string) => countries
  .find((country) => country.alpha3Code === countryId);

// TODO: use createReducer
export function countriesReducer(
  state = initialState,
  action: countryActions.AnyCountryAction,
): CountriesState {
  switch (action.type) {
    case countryActions.LOAD_COUNTRIES: {
      return {
        ...state,
        loading: true,
        loadingError: false,
        selectedCountry: null,
      };
    }
    case countryActions.COUNTRIES_LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        // TODO: make sure the reference can stay the same
        countries: action.payload,
        countryOptions: fromServices.extractCountryOptions(action.payload),
      };
    }
    case countryActions.COUNTRIES_LOAD_ERROR: {
      return {
        ...state,
        loading: true,
        loadingError: true,
      };
    }
    case countryActions.COUNTRY_SELECT: {
      return {
        ...state,
        selectedCountry: { ...selectCountry(state.countries, action.payload) },
      };
    }
    default: {
      return state;
    }
  }
}

export const getRegionOptions = (state: CountriesState) => state.regionOptions;
export const getCountryOptions = (state: CountriesState) => state.countryOptions;
export const getSelectedCountry = (state: CountriesState) => state.selectedCountry;
// TODO: implement for a loader indicator
export const getCountriesLoading = (state: CountriesState) => state.loading;
