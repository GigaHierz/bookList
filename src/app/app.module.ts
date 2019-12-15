import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { FormsModule } from '@angular/forms';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HttpClientModule }    from '@angular/common/http';
import { BookSearchComponent } from './book-search/book-search.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    DetailPageComponent,
    BookSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
