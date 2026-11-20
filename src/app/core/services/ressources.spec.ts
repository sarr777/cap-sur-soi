import { TestBed } from '@angular/core/testing';

import { Ressources } from './ressources';

describe('Ressources', () => {
  let service: Ressources;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ressources);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
