import { createReducer, on } from '@ngrx/store';
import * as countryActions from '../actions';
import { Country, CountriesByRegions } from '../../models/country.model';
import { AreaSelectorOption } from '../../models/display.model';
import * as fromServices from '../../services';


export interface CountriesState {
  countries: Country[];
  countriesByRegions: CountriesByRegions;
  regionOptions: AreaSelectorOption[];
  countryOptions: AreaSelectorOption[];
  selectedRegion: string;
  selectedCountry: Country;
  loading: boolean;
  loaded: boolean;
  loadingError: boolean;
}

export const initialState: CountriesState = {
  countries: [],
  countriesByRegions: { asia: null, europe: null },
  regionOptions: [
    { value: 'asia', viewValue: 'Asia' },
    { value: 'europe', viewValue: 'Europe' },
  ],
  countryOptions: [],
  selectedRegion: null,
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
        selectedRegion: action.payload,
        selectedCountry: null,
        countryOptions: [],
      };
    }
    case countryActions.COUNTRIES_LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        loadingError: false,
        countries: action.payload.countries,
        countriesByRegions: {
          ...state.countriesByRegions,
          [action.payload.region]: action.payload.countries,
        },
        selectedCountry: null,
        countryOptions: fromServices.extractCountryOptions(action.payload.countries),
      };
    }
    case countryActions.COUNTRIES_LOAD_ERROR: {
      return {
        ...state,
        loading: false,
        loadingError: true,
        selectedRegion: null,
        selectedCountry: null,
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
export const getSelectedRegion = (state: CountriesState) => state.selectedRegion;
export const getSelectedCountry = (state: CountriesState) => state.selectedCountry;
export const getFlag = (state: CountriesState) => (state.selectedCountry
  ? state.selectedCountry.flag
  : null
);
export const getLoadingInProgress = (state: CountriesState) => state.loading;
export const getError = (state: CountriesState) => state.loadingError;
