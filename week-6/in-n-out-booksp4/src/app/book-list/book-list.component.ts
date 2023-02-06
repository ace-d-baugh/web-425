/*
============================================
, Title: book-list.component.ts
; Author: Ace Baugh
; Date: 6 February 2023
; Description: This is the book list component
+===========================================
*/

// Import statements
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
// This is the book list component
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook = { // This is the book object with dummy information
        isbn: `111`,
        title: `The Book`,
        description: `The Book is a book`,
        numOfPages: 2,
        authors: [`Ace Buagh`],
      }; // This will be used to store the book details that will be displayed in the dialog

  // This is the constructor
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {}

  // This function will be used to display the book details
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book,
      },
      disableClose: true,
      width: '800px',
    });

    console.log(this.book);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.book = null as any; // This will clear the book object
      }
    });
  }
}
