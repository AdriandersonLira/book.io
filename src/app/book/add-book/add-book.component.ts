import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Book from '../../shared/model/book';
import { BookService } from '../../shared/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  book: Book;
  title = 'Adicionar';

  constructor(
    private bookService: BookService,
    private currentRoute: ActivatedRoute,
    private router: Router
  ) {
    this.book = new Book();
    if (this.currentRoute.snapshot.paramMap.has('id')) {
      this.title = 'Editar';

      const id = Number(this.currentRoute.snapshot.paramMap.get('id'));

      this.bookService.fetch(id).subscribe(
        response => this.book = response
      );
    }
  }

  ngOnInit(): void {}

  handleBookInsertion(): void {
    if (this.book.id) {
      this.bookService.replace(this.book).subscribe(
        book => this.router.navigate(['see-book'])
      )
    } else {
      this.bookService.insert(this.book).subscribe(
        book => this.router.navigate(['see-book'])
      );
    }
  }
}
