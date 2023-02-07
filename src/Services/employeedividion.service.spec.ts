import { TestBed } from '@angular/core/testing';

import { EmployeedividionService } from './employeedividion.service';

describe('EmployeedividionService', () => {
  let service: EmployeedividionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeedividionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
