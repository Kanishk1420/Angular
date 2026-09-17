import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesNgswitch } from './directives-ngswitch';

describe('DirectivesNgswitch', () => {
  let component: DirectivesNgswitch;
  let fixture: ComponentFixture<DirectivesNgswitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesNgswitch],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectivesNgswitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
