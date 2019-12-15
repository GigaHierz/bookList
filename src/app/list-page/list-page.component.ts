import { Component, OnInit, Inject } from '@angular/core';
import { Book } from '../datatypes/Book'
import { BooksService } from '../books.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  public books : Book[];
  public book: Book;

  constructor(private router: Router, public booksService: BooksService) { }

  ngOnInit() {
    /** subscribes to the books observable in the booksService */
    this.booksService.getBooks().subscribe(books => this.books = books)
  }

  /**
   * Function navigates to the selected Book, when clicked
   * @param book the book, that is chosen by the user
   */
  onSelect(book: Book): void {
    this.book = book;
    this.router.navigate([`/detail-page/${book.id}`])
  }

}
