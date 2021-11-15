import { TestBed } from '@angular/core/testing';

import { BreweryLocationInterceptor } from './brewery-location.interceptor';

describe('BreweryLocationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BreweryLocationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BreweryLocationInterceptor = TestBed.inject(BreweryLocationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
