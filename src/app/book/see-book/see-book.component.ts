import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/services/book.service';
import Book from '../../shared/model/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-see-book',
  templateUrl: './see-book.component.html',
  styleUrls: ['./see-book.component.scss']
})
export class SeeBookComponent implements OnInit {
  books: Array<Book>;

  constructor(private bookService: BookService, private router: Router) {
    this.books = [];
  }

  ngOnInit(): void {
    this.bookService.fetchAll().subscribe(
      books => this.books = books
    );
  }

  handleEditing(book: Book) {
    this.router.navigate(['edit-book', book.id]);
  }

  handleDeleting(book: Book) {
    this.bookService.delete(book).subscribe(
      response => {
        const bookIndexToRemove = this.books.findIndex(b => b.id === book.id);

        if (bookIndexToRemove > -1) {
          this.books.splice(bookIndexToRemove, 1);
        }
      }
    );
  }
}
