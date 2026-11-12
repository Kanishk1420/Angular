import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifeCycle } from './component-life-cycle';

describe('ComponentLifeCycle', () => {
  let component: ComponentLifeCycle;
  let fixture: ComponentFixture<ComponentLifeCycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLifeCycle],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentLifeCycle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
