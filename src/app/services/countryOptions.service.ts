import { Country, AreaSelectorOption } from '../models';


export const extractCountryOptions = (countries: Country[]): AreaSelectorOption[] => {
  if (!countries || !Array.isArray(countries) || !countries.length) {
    return [];
  }
  return countries
    .map((country) => ({
      value: country.alpha3Code,
      viewValue: country.name,
    } as AreaSelectorOption));
};
