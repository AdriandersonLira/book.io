import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Book from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  URL_BOOKS = 'http://localhost:8080/books'

  constructor(private httpClient: HttpClient) {
  }

  fetch(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.URL_BOOKS}/${id}`);
  }

  fetchAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.URL_BOOKS);
  }

  insert(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.URL_BOOKS, book);
  }

  delete(book: Book): Observable<object> {
    return this.httpClient.delete(`${this.URL_BOOKS}/${book.id}`);
  }

  replace(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.URL_BOOKS}/${book.id}`, book);
  }
}
