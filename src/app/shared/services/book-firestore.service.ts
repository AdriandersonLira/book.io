import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import { Book } from '../model/book';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookFirestoreService {

  collectionBook: AngularFirestoreCollection<Book>;
  NOME_COLLECTION = 'books';

  constructor(private afs: AngularFirestore) {
    this.collectionBook = afs.collection(this.NOME_COLLECTION);
  }

  listar(): Observable<Book[]> {
    return this.collectionBook.valueChanges({idField: 'id'});
  }

  inserir(book: Book): Observable<object> {
    delete book.id;
    return from(this.collectionBook.add(Object.assign({}, book)));
  }

  remover(id: string): Observable<void> {
    return from(this.collectionBook.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Book> {
    return this.collectionBook.doc(id).get().pipe(map(
      document => new Book(document.id, document.data())
    ));
  }

  atualizar(book: Book): Observable<void> {
    // removendo id pois não vamos guardar nos dados do documento, mas sim usar apenas como id para recuperar o documento
    delete book.id;
    return from(this.collectionBook.doc(book.id).update(Object.assign({}, book)));
  }
}
