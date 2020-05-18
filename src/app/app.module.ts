import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import AppDbSelectorComponent from './components/app-selector/app-selector.component';
import AppCountryInfoComponent from './components/app-country-info/app-country-info.component';
import AppComponent from './components/app/app.component';
import AppSelectorCountriesComponent from './components/app-selector-countries/app-selector-countries.component';
import AppSelectorRegionsComponent from './components/app-selector-regions/app-selector-regions.component';

import { CountriesService } from './services';
import { reducers, effects } from './store';


@NgModule({
  declarations: [
    AppComponent,
    AppDbSelectorComponent,
    AppCountryInfoComponent,
    AppSelectorRegionsComponent,
    AppSelectorCountriesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,

    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSelectModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
  ],
  exports: [],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    CountriesService,
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {}
