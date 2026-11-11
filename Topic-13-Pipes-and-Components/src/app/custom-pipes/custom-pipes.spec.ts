import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipes } from './custom-pipes';

describe('CustomPipes', () => {
  let component: CustomPipes;
  let fixture: ComponentFixture<CustomPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPipes],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomPipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
