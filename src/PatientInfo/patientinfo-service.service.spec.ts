import { TestBed } from '@angular/core/testing';

import { PatientinfoServiceService } from './patientinfo-service.service';

describe('PatientinfoServiceService', () => {
  let service: PatientinfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientinfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
