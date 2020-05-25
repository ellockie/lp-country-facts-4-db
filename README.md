# CountryFacts

## Application built with:

- Angular 9
- NgRx 9 (store + effects)
- Material Theme
- External country facts API
- Simple caching

## How it works

Region selector gets subscribed to the Regions's slice of state (via an appropriate selector) and get's populated with 2 hardcoded regions, that were a part of state initialisation. On user Region selection, a `LoadCountriesForRegion` action is dispatched. It triggers a **NgRx effect** to call a service wich calls the external API and returns an observable. Within effect any existing observable get unsubscribed and the effect dispatches a `CountriesLoadSuccess` action, which gets to the reducer. Reducer returns a new, updated state - with countries for the selected region, with country selector options and updates the "state-based" cache. When user selects a country, an action is dispatched, which sets the `selectedSountry` state property. A "country info" component is subscribed to that property and populates itself with data. Apart from the flag, there is also another visual effect reacting to a country selection.

For the select controls a single, generic, purely presentational component was used, consumed by 2 specialised containers.

In case of a failing API, there will be a simple message displayed.

There is a suite of 16 tests.

The `css / less` rules naming mostly followed the `BEM` recommendations, and the structure was kept as flat as possible, to be also aligned with these suggestions.

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

<!--
## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
 -->
