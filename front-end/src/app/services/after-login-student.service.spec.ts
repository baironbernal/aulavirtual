import { TestBed } from '@angular/core/testing';

import { AfterLoginStudentService } from './after-login-student.service';

describe('AfterLoginStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfterLoginStudentService = TestBed.get(AfterLoginStudentService);
    expect(service).toBeTruthy();
  });
});
