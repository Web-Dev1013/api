import { TestBed } from '@angular/core/testing';

import { SerpService } from './serp.service';

describe('SerpService', () => {
  let service: SerpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
