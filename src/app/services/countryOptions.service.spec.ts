import { extractCountryOptions } from './countryOptions.service';
import { Country } from '../models/country.model';
import { AreaSelectorOption } from '../models/display.model';

const mockCountries: Country[] = [{
  alpha3Code: 'ABC',
  name: 'Nepal',
  capital: 'Kathmandu',
  population: 28431500,
  flag: 'flag',
  currencies: [{
    code: 'NEP',
    name: 'Nepalese rupee',
    symbol: 'NRP',
  }],
}, {
  alpha3Code: 'ABC2',
  name: 'Norway',
  capital: '1',
  population: 2,
  flag: '3',
  currencies: [{
    code: '4',
    name: '6',
    symbol: 'faea',
  }],
}];
let options: AreaSelectorOption[];


describe('ExtractCountryOptions Service', () => {
  it('should return empty array of options when no countries provided', () => {
    options = extractCountryOptions([]);
    expect(options).toEqual([]);
  });

  it('should return correct options', () => {
    options = extractCountryOptions(mockCountries);
    expect(options[0]).toEqual({ value: 'ABC', viewValue: 'Nepal' });
  });
});
