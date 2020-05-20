import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';

import AppComponent from './app.component';
import AppCountryInfoComponent from '../app-country-info/app-country-info.component';
import AppSelectorRegionsComponent from '../app-selector-regions/app-selector-regions.component';
import AppSelectorCountriesComponent from '../app-selector-countries/app-selector-countries.component';
import AppSelectorComponent from '../app-selector/app-selector.component';
import { AppState, reducers } from '../../store/reducers';
import { initialState } from '../../store/reducers/countries.reducer';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  const initState: AppState = { countryViewFeature: { ...initialState } };

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          AppComponent,
          AppSelectorComponent,
          AppCountryInfoComponent,
          AppSelectorRegionsComponent,
          AppSelectorCountriesComponent,
        ],
        imports: [
          BrowserAnimationsModule,
          MatCardModule,
          MatDividerModule,
          MatProgressBarModule,
          MatSelectModule,
          StoreModule.forRoot(reducers),
        ],
        providers: [
          provideMockStore({ initialState: initState }),
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title \'country-facts\'', () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('country-facts');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content mat-card-title').textContent).toContain('Country Facts');
  });
});
