export interface Labels {
  region: string;
  country: string;
}

export interface AreaSelectorOption {
  value: string;
  viewValue: string;
}

export const selectorLabels: Labels = {
  region: 'Region',
  country: 'Country',
};
