import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { AddBookComponent } from './add-book/add-book.component';
import { SeeBookComponent } from './see-book/see-book.component';
import { SeeBookTableComponent } from './see-book-table/see-book-table.component';

@NgModule({
  declarations: [
    AddBookComponent,
    SeeBookComponent,
    SeeBookTableComponent
  ],
  exports: [
    AddBookComponent,
    SeeBookComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule
  ]
})
export class BookModule { }
