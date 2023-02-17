import { TestBed } from '@angular/core/testing';

import { CustomQueryService } from './custom-query.service';

describe('CustomQueryService', () => {
  let service: CustomQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
