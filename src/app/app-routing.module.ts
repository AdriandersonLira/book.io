import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './book/add-book/add-book.component';
import { SeeBookComponent } from './book/see-book/see-book.component';
import { SeeBookTableComponent } from './book/see-book-table/see-book-table.component';

const routes: Routes = [
  {
    path: 'edit-book/:id',
    component: AddBookComponent
  },
  {
    path: 'add-book',
    component: AddBookComponent
  },
  {
    path: 'see-book',
    component: SeeBookComponent
  },
  {
    path: 'see-book-table',
    component: SeeBookTableComponent
  },
  {
    path: '',
    component: SeeBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
