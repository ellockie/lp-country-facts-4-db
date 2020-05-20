import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { provideMockStore } from '@ngrx/store/testing';

import { MatSelectModule } from '@angular/material/select';

import AppSelectorComponent from './app-selector.component';
import { AppState } from '../../store/reducers';
import { initialState } from '../../store/reducers/countries.reducer';


describe('AppSelectorComponent', () => {
  let component: AppSelectorComponent;
  let fixture: ComponentFixture<AppSelectorComponent>;
  let debugElement: DebugElement;
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
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a label', () => {
    component.label = 'Galaxies';
    fixture.detectChanges();
    const label: HTMLElement = debugElement.query(By.css('label')).nativeElement;
    expect(label.textContent).toContain('Galaxies');
  });
});
