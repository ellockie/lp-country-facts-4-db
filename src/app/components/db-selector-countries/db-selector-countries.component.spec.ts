import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbSelectorCountriesComponent } from './db-selector-countries.component';

describe('DbSelectorCountriesComponent', () => {
  let component: DbSelectorCountriesComponent;
  let fixture: ComponentFixture<DbSelectorCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbSelectorCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbSelectorCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
