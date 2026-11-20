import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Procrastination } from './procrastination';

describe('Procrastination', () => {
  let component: Procrastination;
  let fixture: ComponentFixture<Procrastination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Procrastination],
    }).compileComponents();

    fixture = TestBed.createComponent(Procrastination);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
