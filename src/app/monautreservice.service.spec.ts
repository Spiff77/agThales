import { TestBed } from '@angular/core/testing';

import { MonautreserviceService } from './monautreservice.service';

describe('MonautreserviceService', () => {
  let service: MonautreserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonautreserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
