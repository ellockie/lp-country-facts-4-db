import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import AppDbSelectorComponent from './app-selector.component';

describe('DbSelectorComponent', () => {
  let component: AppDbSelectorComponent;
  let fixture: ComponentFixture<AppDbSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppDbSelectorComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDbSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
