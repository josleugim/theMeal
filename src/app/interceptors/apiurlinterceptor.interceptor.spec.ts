import { TestBed } from '@angular/core/testing';

import { APIURLInterceptorInterceptor } from './apiurlinterceptor.interceptor';

describe('APIURLInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      APIURLInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: APIURLInterceptorInterceptor = TestBed.inject(APIURLInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
