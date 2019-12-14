import { Component, OnInit, Input, Inject } from '@angular/core';
import { Book } from '../datatypes/Book'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  public book: Book;

  constructor(
    @Inject(ActivatedRoute) public route: ActivatedRoute, 
    @Inject(BooksService) public booksService: BooksService,
    @Inject(Router) private router: Router,) { 
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
