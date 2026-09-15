import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesNgfor } from './directives-ngfor';

describe('DirectivesNgfor', () => {
  let component: DirectivesNgfor;
  let fixture: ComponentFixture<DirectivesNgfor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesNgfor],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectivesNgfor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
