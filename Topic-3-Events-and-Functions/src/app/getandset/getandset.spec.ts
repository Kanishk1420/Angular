import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getandset } from './getandset';

describe('Getandset', () => {
  let component: Getandset;
  let fixture: ComponentFixture<Getandset>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getandset],
    }).compileComponents();

    fixture = TestBed.createComponent(Getandset);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
