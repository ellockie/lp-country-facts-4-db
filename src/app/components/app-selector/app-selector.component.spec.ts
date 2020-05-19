import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideMockStore } from '@ngrx/store/testing';

import { MatSelectModule } from '@angular/material/select';
import AppSelectorComponent from './app-selector.component';
import { AppState } from '../../store/reducers';
import { initialState } from '../../store/reducers/countries.reducer';


describe('AppSelectorComponent', () => {
  let component: AppSelectorComponent;
  let fixture: ComponentFixture<AppSelectorComponent>;
  const initState: AppState = { countryViewFeature: { ...initialState } };

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [AppSelectorComponent],
        imports: [
          BrowserAnimationsModule,
          MatSelectModule,
        ],
        providers: [provideMockStore({ initialState: initState })],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
