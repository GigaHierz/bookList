import { Injectable } from '@angular/core';
import { Book } from './datatypes/Book'
import { Books } from './mock-books'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(): Observable<Book[]> {
    console.log(Books.find(book => book.id === '618645616'))
    return of (Books);
  }
  getBook(id: number): Observable<Book> {
    console.log(id)
    console.log(Books.find(book => book.id === id.toString()))
    return of (Books.find(book => book.id === id.toString()));
  }
}
