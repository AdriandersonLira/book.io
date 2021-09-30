export default class Book {
  id?: string;
  title?: string;
  caption?: string;
  description?: string;
  author?: string;
  pages?: number;

  constructor(id?: string, book: Book = {}) {
    this.id = id;
    this.title = book.title;
    this.caption = book.caption;
    this.description = book.description;
    this.author = book.author;
    this.pages = book.pages;
  }
}
