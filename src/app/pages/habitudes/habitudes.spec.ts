import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Habitudes } from './habitudes';

describe('Habitudes', () => {
  let component: Habitudes;
  let fixture: ComponentFixture<Habitudes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Habitudes],
    }).compileComponents();

    fixture = TestBed.createComponent(Habitudes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
