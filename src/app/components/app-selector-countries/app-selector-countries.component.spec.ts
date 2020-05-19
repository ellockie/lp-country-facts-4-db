import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideMockStore } from '@ngrx/store/testing';

import { MatSelectModule } from '@angular/material/select';

import AppSelectorCountriesComponent from './app-selector-countries.component';
import AppSelectorComponent from '../app-selector/app-selector.component';
import { AppState } from '../../store/reducers';
import { initialState } from '../../store/reducers/countries.reducer';


describe('AppSelectorCountriesComponent', () => {
  let component: AppSelectorCountriesComponent;
  let fixture: ComponentFixture<AppSelectorCountriesComponent>;
  const initState: AppState = { countryViewFeature: { ...initialState } };

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          AppSelectorComponent,
          AppSelectorCountriesComponent,
        ],
        imports: [
          BrowserAnimationsModule,
          MatSelectModule,
        ],
        providers: [provideMockStore({ initialState: initState })],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSelectorCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
