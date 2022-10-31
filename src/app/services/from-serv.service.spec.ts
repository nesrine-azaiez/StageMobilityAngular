import { TestBed } from '@angular/core/testing';

import { FromServService } from './from-serv.service';

describe('FromServService', () => {
  let service: FromServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FromServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
