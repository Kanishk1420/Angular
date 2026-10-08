import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleteDrivenForms } from './templete-driven-forms';

describe('TempleteDrivenForms', () => {
  let component: TempleteDrivenForms;
  let fixture: ComponentFixture<TempleteDrivenForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleteDrivenForms],
    }).compileComponents();

    fixture = TestBed.createComponent(TempleteDrivenForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
