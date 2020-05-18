import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import AppSelectorRegionsComponent from './app-selector-regions.component';

describe('AppSelectorRegionsComponent', () => {
  let component: AppSelectorRegionsComponent;
  let fixture: ComponentFixture<AppSelectorRegionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppSelectorRegionsComponent],
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
