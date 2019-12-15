import { Injectable } from '@angular/core';
import { Book } from './datatypes/Book'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor( private http: HttpClient) { }

  // URL where backend can be reached
  private booksUrl = 'http://localhost:3000/books';

  httpOptions = {
    // needed for the updateBook, didn't understand yet what for exactly. 
    // TODO: research, and improve
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /* GET all Books */
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl + '/discover')
      .pipe(
        tap(_ => console.log('fetched books')),
        catchError(this.handleError<Book[]>('getBooks', []))
      );
  }

  /**
   *   GET Book by id 
   *  - [ ] doesn't work when Id contains a letter, e.g. The Kite Runner Id: 159463193X
   */
  getBook(id: string): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;

    return this.http.get<Book>(url).pipe(
      tap(_ => console.log(`fetched book id=${id}`)),
      catchError(this.handleError<Book>(`getBook id=${id}`))
    );
  }

  /** PUT: update the book on the server 
   * - throws Error : "Unexpected token o in JSON at position 1"
   * - TODO make it work, maybe something with the header?
  */
  updateBook (book: Book): Observable<any> {
    const url = `${this.booksUrl}/${book.id}`;

    return this.http.put(url, book, this.httpOptions).pipe(
      tap(_ => console.log(`updated book id=${book.id}`)),
      catchError(this.handleError<any>('updateBook'))
    );
  }

  /* GET books whose name contains search term */
  searchBooks(term: string): Observable<Book[]> {
    if (!term.trim()) {
      // if not search term, return empty book array.
      return of([]);
    }
    return this.http.get<Book[]>(`${this.booksUrl}/search/?query=${term}`).pipe(
      tap(_ => console.log(`found books matching "${term}"`)),
      catchError(this.handleError<Book[]>('searchBooks', []))
    );
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.log(error);

    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
