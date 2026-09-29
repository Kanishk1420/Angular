import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupingReactiveForms } from './form-grouping-reactive-forms';

describe('FormGroupingReactiveForms', () => {
  let component: FormGroupingReactiveForms;
  let fixture: ComponentFixture<FormGroupingReactiveForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGroupingReactiveForms],
    }).compileComponents();

    fixture = TestBed.createComponent(FormGroupingReactiveForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
