import { TestBed } from '@angular/core/testing';

import { AppPatternsService } from './app-patterns.service';

describe('AppPatternsService', () => {
  let service: AppPatternsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppPatternsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
