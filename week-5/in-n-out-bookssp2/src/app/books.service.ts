/*
============================================
, Title: books.service.ts
; Author: Ace Baugh
; Date: 31 January 2023
; Description: This is the books service file
+===========================================
*/

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    // This is the books array
    this.books = [
      {
        isbn: `9781592975006`,
        title: `The Book of Mormon: Another Testament of Jesus Christ (Official Edition)`,
        description: `The Book of Mormon is a sacred text of the Latter Day Saint movement, which adherents believe contains writings of ancient prophets who lived on the American continent from approximately 2200 BC to AD 421. It was first published in March 1830 by Joseph Smith as The Book of Mormon: An Account Written by the Hand of Mormon upon Plates Taken from the Plates of Nephi.`,
        numOfPages: 544,
        authors: [`Joseph Smith Jr.`],
      },
      {
        isbn: `9781250773029`,
        title: `Ender's Game (The Ender Quintet)`,
        description: `Ender's Game is a science fiction novel about a young boy selected for a military school for child prodigies to prepare for a future alien invasion. The story explores themes of power, ethics, and the impact of violence on the human psyche as the protagonist rises through the ranks and grapples with the consequences of his actions.`,
        numOfPages: 324,
        authors: [`Orson Scott Card`],
      },
      {
        isbn: `9781982137274`,
        title: `The 7 Habits of Highly Effective People: 30th Anniversary Edition (The Covey Habits Series)`,
        description: `The Seven Habits of Highly Effective People is a self-help book written by Stephen Covey, first published in 1989. The seven habits are a set of principles for personal and interpersonal effectiveness.`,
        numOfPages: 464,
        authors: [`Steven R. Covey`],
      },
      {
        isbn: `9781585424337`,
        title: `Think and Grow Rich`,
        description: `Think and Grow Rich is a 1937 book written by Napoleon Hill and inspired by a suggestion from Scottish-American businessman Andrew Carnegie. While the title implies that this book deals only with how to get rich, the authors explains that the philosophy taught in the book can be used to help people succeed in all lines of work and to do or be almost anything they want.`,
        numOfPages: 318,
        authors: [`Napoleon Hill`],
      },
      {
      isbn: `9788186775097`,
      title: `The Five Love Languages: How to Express Heartfelt Commitment to Your Mate`,
      description: `The Five Love Languages is a 1995 book by Gary Chapman. The book outlines five ways in which people give and receive love: quality time, words of affirmation, gifts, acts of service, and physical touch.`,
      numOfPages: 204,
      authors: [`Gary Chapman`],
      },
    ];
  }

  // This function will return the books array
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  // This function will return a book based on the isbn
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    // Not sure if this is the best way to handle this
    return {} as IBook;
  }
}
