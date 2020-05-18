import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import AppSelectorCountriesComponent from './app-selector-countries.component';

describe('DbSelectorCountriesComponent', () => {
  let component: AppSelectorCountriesComponent;
  let fixture: ComponentFixture<AppSelectorCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppSelectorCountriesComponent],
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
