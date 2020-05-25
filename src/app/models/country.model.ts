import { Currency } from './currency.model';
import { Regions } from './region.model';


export interface Country {
  // country's ID
  alpha3Code: string;
  name: string;
  capital: string;
  population: number;
  currencies: Currency[];
  flag: string;
}

export interface CountriesByRegions {
  [Regions.asia]: Country[];
  [Regions.europe]: Country[];
}
