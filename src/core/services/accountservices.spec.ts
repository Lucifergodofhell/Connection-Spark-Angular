import { TestBed } from '@angular/core/testing';

import { Accountservices } from './accountservices';

describe('Accountservices', () => {
  let service: Accountservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Accountservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
