import { TestBed } from '@angular/core/testing';

import { Initservices } from './initservices';

describe('Initservices', () => {
  let service: Initservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Initservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
