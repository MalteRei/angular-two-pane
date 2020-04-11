import { TestBed } from '@angular/core/testing';

import { DuoPaneInformationService } from './duo-pane-information.service';

describe('DuoPaneInformationService', () => {
  let service: DuoPaneInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuoPaneInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
