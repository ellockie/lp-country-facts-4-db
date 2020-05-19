import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideMockStore } from '@ngrx/store/testing';

import { MatSelectModule } from '@angular/material/select';

import AppSelectorRegionsComponent from './app-selector-regions.component';
import AppSelectorComponent from '../app-selector/app-selector.component';
import { AppState } from '../../store/reducers';
import { initialState } from '../../store/reducers/countries.reducer';


describe('AppSelectorRegionsComponent', () => {
  let component: AppSelectorRegionsComponent;
  let fixture: ComponentFixture<AppSelectorRegionsComponent>;
  const initState: AppState = { countryViewFeature: { ...initialState } };

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          AppSelectorComponent,
          AppSelectorRegionsComponent,
        ],
        imports: [
          MatSelectModule,
          BrowserAnimationsModule,
        ],
        providers: [provideMockStore({ initialState: initState })],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSelectorRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
