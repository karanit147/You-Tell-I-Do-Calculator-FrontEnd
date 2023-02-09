import { TestBed } from '@angular/core/testing';

import { ContolServiceService } from './contol-service.service';

describe('ContolServiceService', () => {
  let service: ContolServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContolServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
