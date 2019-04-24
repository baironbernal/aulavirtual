import { TestBed } from '@angular/core/testing';

import { TokenjwtService } from './tokenjwt.service';

describe('TokenjwtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenjwtService = TestBed.get(TokenjwtService);
    expect(service).toBeTruthy();
  });
});
