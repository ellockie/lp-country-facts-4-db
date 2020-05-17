import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbCountryInfoComponent } from './db-country-info.component';

describe('DbCountryInfoComponent', () => {
  let component: DbCountryInfoComponent;
  let fixture: ComponentFixture<DbCountryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbCountryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbCountryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
