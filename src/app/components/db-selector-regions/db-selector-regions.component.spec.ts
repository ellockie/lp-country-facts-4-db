import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbSelectorRegionsComponent } from './db-selector-regions.component';

describe('DbSelectorRegionsComponent', () => {
  let component: DbSelectorRegionsComponent;
  let fixture: ComponentFixture<DbSelectorRegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbSelectorRegionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbSelectorRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
