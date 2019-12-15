import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from "@angular/router";
import { DetailPageComponent } from './detail-page.component';
import { BooksService } from '../books.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPageComponent ], 
      providers: [
        {
          provide: BooksService, Router, ActivatedRoute
        }
      ],
      imports: [FormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPageComponent);
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

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
