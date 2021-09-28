import { Component, OnInit } from '@angular/core';
import Book from '../../shared/model/book';
import { BookService } from '../../shared/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookService) {
    this.book = new Book();
  }

  ngOnInit(): void {
  }

  handleBookInsertion(): void {
    this.bookService.insert(this.book).subscribe(
      book => console.log(book)
    );
    this.book = new Book();
  }
}
