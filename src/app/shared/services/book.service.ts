import { Injectable } from '@angular/core';
import Book from '../model/book';
import { Books } from '../model/Books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Array<Book>;

  constructor() {
    this.books = Books;
  }

  fetchAll(): Array<Book> {
    return this.books;
  }

  insert(book: Book): void {
    this.books.push(book);
  }
}
