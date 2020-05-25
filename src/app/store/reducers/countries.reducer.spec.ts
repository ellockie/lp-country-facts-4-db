import { countriesReducer, CountriesState, initialState } from './countries.reducer';
import {
  CountriesLoadError, CountriesLoadSuccess, LoadCountriesForRegion, SelectCountry,
} from '../actions';
import {
  Country, Regions,
} from '../../models';


const mockCountry: Country = {
  alpha3Code: 'ABC',
  name: 'DEF',
  capital: 'GHI',
  population: 123,
  currencies: [{ code: 'JKL', name: 'MNO', symbol: 'PQR' }],
  flag: 'STU',
};

describe('Reducer', () => {
  it('should return correct state after region selection', () => {
    const setRegionAction = new LoadCountriesForRegion(Regions.asia);
    // Will load the initial state as a default
    const newState = countriesReducer(undefined, setRegionAction);

    expect(newState.loading).toEqual(true);
    expect(newState.selectedRegion).toEqual(Regions.asia);
    expect(newState.selectedCountry).toEqual(null);
    expect(newState.countryOptions).toEqual([]);
  });

  it('should return correct state after loading countries', () => {
    const setRegionAction = new CountriesLoadSuccess({
      region: Regions.europe,
      countries: [mockCountry, mockCountry],
      countryOptions: [
        { value: 'ABC1', viewValue: 'DEF1' },
        { value: 'ABC2', viewValue: 'DEF2' }],
    });
    // Will load the initial state as a default
    const newState = countriesReducer(undefined, setRegionAction);

    expect(newState.loading).toEqual(false);
    expect(newState.loadingError).toEqual(false);
    expect(newState.countries).toEqual([mockCountry, mockCountry]);
    expect(newState.countryOptions[1]).toEqual({ value: 'ABC2', viewValue: 'DEF2' });
    expect(newState.countriesByRegions[Regions.asia]).toEqual(null);
    expect(newState.countriesByRegions[Regions.europe][1]).toEqual(mockCountry);
    expect(newState.selectedCountry).toEqual(null);
  });

  it('should return correct state after an error', () => {
    const countriesLoadErrorAction = new CountriesLoadError('ERROR TESTING - IGNORE');
    // Will load the initial state as a default
    const newState = countriesReducer(undefined, countriesLoadErrorAction);

    expect(newState.loading).toEqual(false);
    expect(newState.loadingError).toEqual(true);
    expect(newState.selectedRegion).toEqual(null);
    expect(newState.selectedCountry).toEqual(null);
  });

  it('should return correct state after country selection', () => {
    const countrySelectAction = new SelectCountry('ABC');
    const mockState: CountriesState = { ...initialState, countries: [mockCountry] };
    const newState = countriesReducer(mockState, countrySelectAction);

    expect(newState.selectedCountry.population).toEqual(123);
  });
});
