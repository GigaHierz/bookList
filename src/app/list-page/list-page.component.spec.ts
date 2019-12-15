import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPageComponent } from './list-page.component';
import { BookSearchComponent } from '../book-search/book-search.component';
import { BooksService } from '../books.service';
import { Router, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPageComponent , BookSearchComponent],
      providers: [
        {
          provide: BooksService, Router
        },
      ],
      imports: [FormsModule, RouterModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;

    component.book = {
      "title": "Harry Potter and the Deathly Hallows",
      "author": "J. K. Rowling",
      "coverImageUrl": "https://images-na.ssl-images-amazon.com/images/I/5128ATd9dSL._SX418_BO1,204,203,200_.jpg",
      "id": "545139708",
      "pageCount": 784,
      "publisher": "Scholastic",
      "synopsis": "A spectacular finish to a phenomenal series, Harry Potter and the Deathly Hallows is a bittersweet read for fans. The journey is hard, filled with events both tragic and triumphant, the battlefield littered with the bodies of the dearest and despised, but the final chapter is as brilliant and blinding as a phoenix's flame, and fans and skeptics alike will emerge from the confines of the story with full but heavy hearts, giddy and grateful for the experience."
    }

    component.books = [
      {
        "title": "Harry Potter and the Half-Blood Prince",
        "author": "J. K. Rowling",
        "coverImageUrl": "https://images-na.ssl-images-amazon.com/images/I/51KV4CXARLL._SX342_BO1,204,203,200_.jpg",
        "id": "439785960",
        "pageCount": 652,
        "publisher": "Scholastic",
        "synopsis": "The war against Voldemort is not going well; even the Muggles have been affected. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses. And yet . . . as with all wars, life goes on. Sixth-year students learn to Apparate. Teenagers flirt and fight and fall in love. Harry receives some extraordinary help in Potions from the mysterious Half-Blood Prince. And with Dumbledore's guidance, he seeks out the full, complex story of the boy who became Lord Voldemort -- and thus finds what may be his only vulnerability."
      },
      {
        "title": "Harry Potter and the Deathly Hallows",
        "author": "J. K. Rowling",
        "coverImageUrl": "https://images-na.ssl-images-amazon.com/images/I/5128ATd9dSL._SX418_BO1,204,203,200_.jpg",
        "id": "545139708",
        "pageCount": 784,
        "publisher": "Scholastic",
        "synopsis": "A spectacular finish to a phenomenal series, Harry Potter and the Deathly Hallows is a bittersweet read for fans. The journey is hard, filled with events both tragic and triumphant, the battlefield littered with the bodies of the dearest and despised, but the final chapter is as brilliant and blinding as a phoenix's flame, and fans and skeptics alike will emerge from the confines of the story with full but heavy hearts, giddy and grateful for the experience."
      }
    ]

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
