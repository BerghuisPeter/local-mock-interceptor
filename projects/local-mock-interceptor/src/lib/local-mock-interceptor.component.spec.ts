import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalMockInterceptorComponent } from './local-mock-interceptor.component';

describe('LocalMockInterceptorComponent', () => {
  let component: LocalMockInterceptorComponent;
  let fixture: ComponentFixture<LocalMockInterceptorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalMockInterceptorComponent]
    });
    fixture = TestBed.createComponent(LocalMockInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
