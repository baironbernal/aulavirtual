import { TestBed } from '@angular/core/testing';

import { AfterLoginTeacherService } from './after-login-teacher.service';

describe('AfterLoginTeacherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfterLoginTeacherService = TestBed.get(AfterLoginTeacherService);
    expect(service).toBeTruthy();
  });
});
