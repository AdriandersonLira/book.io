import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BookService } from 'src/app/shared/services/book.service';

import Book from '../../shared/model/book';

@Component({
  selector: 'app-see-book-table',
  templateUrl: './see-book-table.component.html',
  styleUrls: ['./see-book-table.component.scss']
})
export class SeeBookTableComponent implements OnInit {
  books: MatTableDataSource<Book>;
  displayedColumns: string[] = ['id', 'title', 'author', 'pages', 'options'];
  clickedRows = new Set<Book>();

  constructor(private bookService: BookService, private router: Router) {
    this.books = new MatTableDataSource<Book>([]);
  }

  ngOnInit(): void {
    this.bookService.fetchAll().subscribe(
      books => this.books = new MatTableDataSource<Book>(books)
    );
  }

  filter(value: string): void {
    this.books.filter = value.trim().toLowerCase();
  }

  handleEditing(book: Book) {
    this.router.navigate(['edit-book', book.id]);
  }

  handleDeleting(book: Book) {
    this.bookService.delete(book).subscribe(
      response => {
        const bookIndexToRemove = this.books.data.findIndex(b => b.id === book.id);

        if (bookIndexToRemove > -1) {
          this.books.data.splice(bookIndexToRemove, 1);
          this.books = new MatTableDataSource(this.books.data);
        }
      }
    );
  }

}
