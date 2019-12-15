import { TestBed, fakeAsync, flush } from '@angular/core/testing';

import { BooksService } from './books.service';
import { Book } from './datatypes/Book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('BooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{ provide: HttpClient}],
  }));

  // const service: BooksService = TestBed.get(BooksService); 

})
