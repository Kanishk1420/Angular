import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSecond } from './profile-second';

describe('ProfileSecond', () => {
  let component: ProfileSecond;
  let fixture: ComponentFixture<ProfileSecond>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSecond],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileSecond);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
