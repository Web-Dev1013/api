import { TestBed } from '@angular/core/testing';

import { ActivateRouteGuard } from './activate-route.guard';

describe('ActivateRouteGuard', () => {
  let guard: ActivateRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
