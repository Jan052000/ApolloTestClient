import { TestBed } from '@angular/core/testing';

import { SpellBooksService } from './spell-books.service';

describe('SpellBooksService', () => {
  let service: SpellBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpellBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
