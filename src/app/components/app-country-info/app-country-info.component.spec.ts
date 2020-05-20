import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import AppCountryInfoComponent from './app-country-info.component';
import { AppState } from '../../store/reducers';
import { initialState } from '../../store/reducers/countries.reducer';
// import { effects } from '../../store/effects';
// import CountriesEffect from '../../store/effects/countries.effect';


describe('AppCountryInfoComponent', () => {
  let component: AppCountryInfoComponent;
  let fixture: ComponentFixture<AppCountryInfoComponent>;
  let debugElement: DebugElement;
  const initState: AppState = { countryViewFeature: { ...initialState } };
  // let store: MockStore;
  // let actions$: Observable<Action>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [AppCountryInfoComponent],
        providers: [
          provideMockStore({ initialState: initState }),
          // provideMockActions(() => actions$),
        ],
      })
      .compileComponents();
    // store = TestBed.inject(MockStore);
    // const effects = TestBed.inject<CountriesEffect>(CountriesEffect);


  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCountryInfoComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render', () => {
    expect(debugElement.query(By.css('div')).nativeElement.innerText)
      .toBe('Please select a region...');
  });
});
