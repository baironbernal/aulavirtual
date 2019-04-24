import { TestBed } from '@angular/core/testing';

import { ProtectRouteService } from './protect-route.service';

describe('ProtectRouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProtectRouteService = TestBed.get(ProtectRouteService);
    expect(service).toBeTruthy();
  });
});
