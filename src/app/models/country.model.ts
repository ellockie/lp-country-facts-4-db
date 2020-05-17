// eslint-disable-next-line no-unused-vars
import { Currency } from './currency.model';


export interface Country {
  // country's ID
  alpha3Code: string;
  name: string;
  capital: string;
  population: number;
  currencies: Currency[];
  flag: string;
}
