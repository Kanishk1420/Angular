import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignals } from './computed-signals';

describe('ComputedSignals', () => {
  let component: ComputedSignals;
  let fixture: ComponentFixture<ComputedSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(ComputedSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
