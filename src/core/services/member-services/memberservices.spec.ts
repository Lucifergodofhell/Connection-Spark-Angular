import { TestBed } from '@angular/core/testing';

import { Memberservices } from './memberservices';

describe('Memberservices', () => {
  let service: Memberservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Memberservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
