import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoops } from './for-loops';

describe('ForLoops', () => {
  let component: ForLoops;
  let fixture: ComponentFixture<ForLoops>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForLoops],
    }).compileComponents();

    fixture = TestBed.createComponent(ForLoops);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
