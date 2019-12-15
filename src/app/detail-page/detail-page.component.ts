import { Component, OnInit } from '@angular/core';
import { Book } from '../datatypes/Book'
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  public book: Book;

  constructor(
    public route: ActivatedRoute, 
    public booksService: BooksService,
    private router: Router) { 

    // gets the id from the URL
    const id =+ (this.route.snapshot.paramMap.get('id'));
    // subscribes to the Observable, that returns a Book by ID
    this.booksService.getBook(id.toString())
      .subscribe(book => this.book = book);
  }

  ngOnInit() {
  }

  /**
   * If user clicks save, the book should be updatet in the backend 
   * after saving the changes, the user gets redirected to the homepage
   */
  save(): void {
    this.booksService.updateBook(this.book)
      .subscribe(() => this.navigateHome());
  }

  /** Function  when calle, navigates to homepage/ bookList */
  navigateHome() :void {
    this.router.navigate(['/list-page'])
  }

}
