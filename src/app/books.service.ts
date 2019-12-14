import { Injectable } from '@angular/core';
import { Book } from './datatypes/Book'
import { Books } from './mock-books'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor( private http: HttpClient) { }

  private booksUrl = 'http://localhost:3000/books';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl + '/discover')
      .pipe(
        tap(_ => console.log('fetched books')),
        catchError(this.handleError<Book[]>('getHeroes', []))
      );
  }
  getBook(id: string): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      tap(_ => console.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Book>(`getBook id=${id}`))
    );
  }

  /** PUT: update the book on the server */
  updateBook (book: Book): Observable<any> {
    const url = `${this.booksUrl}/${book.id}`;
    return this.http.put(url, book, this.httpOptions).pipe(
      tap(_ => console.log(`updated hero id=${book.id}`)),
      catchError(this.handleError<any>('updateBook'))
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

    // TODO: send the error to remote logging infrastructure
    console.log(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
