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
  displayedColumns: string[] = ['id', 'title', 'author', 'pages'];
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

}
