import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';
import AppCountryInfoComponent from './app-country-info.component';
import { AppState } from '../../store/reducers';
import { initialState } from '../../store/reducers/countries.reducer';


describe('AppCountryInfoComponent', () => {
  let component: AppCountryInfoComponent;
  let fixture: ComponentFixture<AppCountryInfoComponent>;
  const initState: AppState = { countryViewFeature: { ...initialState } };

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [AppCountryInfoComponent],
        providers: [provideMockStore({ initialState: initState })],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCountryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
