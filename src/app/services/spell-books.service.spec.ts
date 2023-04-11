import { TestBed } from '@angular/core/testing';

import { SpellBooksService } from './spell-books.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SpellBooksService', () => {
  let service: SpellBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(SpellBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
