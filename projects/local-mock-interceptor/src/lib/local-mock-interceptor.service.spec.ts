import { TestBed } from '@angular/core/testing';

import { LocalMockInterceptorService } from './local-mock-interceptor.service';

describe('LocalMockInterceptorService', () => {
  let service: LocalMockInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalMockInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
