import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTypesWithSignals } from './data-types-with-signals';

describe('DataTypesWithSignals', () => {
  let component: DataTypesWithSignals;
  let fixture: ComponentFixture<DataTypesWithSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTypesWithSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(DataTypesWithSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
