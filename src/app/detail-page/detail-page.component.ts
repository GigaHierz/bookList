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
    const id =+ (this.route.snapshot.paramMap.get('id'));
    this.booksService.getBook(id.toString())
      .subscribe(book => this.book = book);
  }

  ngOnInit() {
  }

  save(): void {
    this.booksService.updateBook(this.book)
      .subscribe(() => this.navigateHome());
  }

  navigateHome() :void {
    this.router.navigate(['/list-page'])
  }

}
