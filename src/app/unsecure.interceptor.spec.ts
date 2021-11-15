import { TestBed } from '@angular/core/testing';

import { UnsecureInterceptor } from './unsecure.interceptor';

describe('UnsecureInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UnsecureInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UnsecureInterceptor = TestBed.inject(UnsecureInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
