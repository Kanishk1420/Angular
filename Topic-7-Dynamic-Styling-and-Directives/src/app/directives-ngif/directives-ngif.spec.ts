import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesNgif } from './directives-ngif';

describe('DirectivesNgif', () => {
  let component: DirectivesNgif;
  let fixture: ComponentFixture<DirectivesNgif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesNgif],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectivesNgif);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
