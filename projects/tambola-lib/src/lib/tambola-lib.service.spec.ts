import { TestBed } from '@angular/core/testing';

import { TambolaLibService } from './tambola-lib.service';

describe('TambolaLibService', () => {
  let service: TambolaLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TambolaLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
