import { Country } from '../models/country.model';
import { AreaSelectorOption } from '../models/display.model';


export const extractCountryOptions = (countries: Country[]): AreaSelectorOption[] => countries
  .map((country) => ({
    value: country.alpha3Code,
    viewValue: country.name,
  } as AreaSelectorOption));
