import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loops } from './loops';

describe('Loops', () => {
  let component: Loops;
  let fixture: ComponentFixture<Loops>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loops],
    }).compileComponents();

    fixture = TestBed.createComponent(Loops);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
