import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/services/book.service';
import Book from '../../shared/model/book';

@Component({
  selector: 'app-see-book',
  templateUrl: './see-book.component.html',
  styleUrls: ['./see-book.component.scss']
})
export class SeeBookComponent implements OnInit {

  books: Array<Book>;

  constructor(private bookService: BookService) {
    this.books = this.bookService.fetchAll();
  }

  ngOnInit(): void {
    this.books = this.bookService.fetchAll();
  }

  // handleEditing(book: Book) {}

  handleDeleting(book: Book) {
    const bookIndexToRemove = this.books.findIndex(b => b.title === book.title);

    if (bookIndexToRemove > -1) {
      this.books.splice(bookIndexToRemove, 1);
    }
  }

}
