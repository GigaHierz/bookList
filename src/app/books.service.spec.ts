import { TestBed, fakeAsync, flush } from '@angular/core/testing';

import { BooksService } from './books.service';
import { Book } from './datatypes/Book';

describe('BooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  const service: BooksService = TestBed.get(BooksService);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Observables", fakeAsync(() => {

    const book : Book = {
      "title": "Harry Potter and the Chamber of Secrets",
      "author": "J. K. Rowling",
      "coverImageUrl": "https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL._SX340_BO1,204,203,200_.jpg",
      "id": "439064872",
      "pageCount": 341,
      "publisher": "Scholastic",
      "synopsis": "Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange, impish creature who says that if Harry returns to Hogwarts, disaster will strike. And strike it does. For in Harry's second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor and a spirit who haunts the girls' bathroom. But then the real trouble begins -- someone is turning Hogwarts students to stone. Could it be Draco Malfoy, a more poisonous rival than ever? Could it possibly be Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects...Harry Potter himself!"
    };

    service.getBooks();
    service.getBook("439064872");
    service.updateBook(book);
    service.searchBooks('Harry Potter');
    flush();
  }));
});
