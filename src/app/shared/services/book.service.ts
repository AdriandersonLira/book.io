import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Book from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  URL_BOOKS = 'http://localhost:3000/books'

  constructor(private httpClient: HttpClient) {
  }

  fetchAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.URL_BOOKS);
  }

  insert(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.URL_BOOKS, book);
  }
}
