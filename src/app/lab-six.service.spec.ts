import { TestBed, inject } from '@angular/core/testing';

import { LabSixService } from './lab-six.service';

describe('LabSixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabSixService]
    });
  });

  it('should be created', inject([LabSixService], (service: LabSixService) => {
    expect(service).toBeTruthy();
  }));
});
