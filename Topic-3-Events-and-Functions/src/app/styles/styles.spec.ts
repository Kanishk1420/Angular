import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Styles } from './styles';

describe('Styles', () => {
  let component: Styles;
  let fixture: ComponentFixture<Styles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Styles],
    }).compileComponents();

    fixture = TestBed.createComponent(Styles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
