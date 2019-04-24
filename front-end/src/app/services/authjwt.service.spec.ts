import { TestBed } from '@angular/core/testing';

import { AuthjwtService } from './authjwt.service';

describe('AuthjwtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthjwtService = TestBed.get(AuthjwtService);
    expect(service).toBeTruthy();
  });
});
