/*
============================================
, Title: book-list.component.ts
; Author: Ace Baugh
; Date: 31 January 2023
; Description: This is the book list component
+===========================================
*/

// Import statements
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
// This is the book list component
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  // This is the constructor
  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
    // This was added to fix the error
    this.book = {} as IBook;
  }

  ngOnInit(): void {}

  // This function will be used to display the book details
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }
}
