import { TestBed } from '@angular/core/testing';

import { CustomQueryService } from './custom-query.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CustomQueryService', () => {
  let service: CustomQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(CustomQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
