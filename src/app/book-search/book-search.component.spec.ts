import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from "@angular/router";

import { BookSearchComponent } from './book-search.component';
import { BooksService } from '../books.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookSearchComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSearchComponent ],
      providers: [
        {
          provide: BooksService, Router
        }
      ],
      imports: [FormsModule, RouterModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
