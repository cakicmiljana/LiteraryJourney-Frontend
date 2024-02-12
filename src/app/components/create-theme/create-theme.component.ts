import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Book } from 'src/app/models/book';
import { Theme } from 'src/app/models/theme';
import { BooksService } from 'src/app/services/books.service';
import { ThemesService } from 'src/app/services/theme.service';
import { Login, Logout, addBookToTheme, createTheme } from 'src/app/store/user/user.action';
import { selectCreatedThemeIdFeature } from 'src/app/store/user/user.selector';

@Component({
  selector: 'app-create-theme',
  templateUrl: './create-theme.component.html',
  styleUrls: ['./create-theme.component.scss']
})
export class CreateThemeComponent {

  allBook$: Observable<Book[]> = of([]);
  title: string = '';
  description: string = '';
  image: string = '';
  chosenBooks: Book[] = [];
  createdId: Observable<string> = of('')
  newId: string = '';

  constructor(private themesService: ThemesService, private booksService: BooksService, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.allBook$ = this.booksService.getAllBooks();

    this.store.select(selectCreatedThemeIdFeature).subscribe((id) => {
      this.newId = id;
    })
  }

  chooseBook(book: Book) {
    this.chosenBooks.push(book);
    // this.createdId = this.themesService.createTheme(this.title, this.description, this.image)
  }

  createTheme() {
    this.store.dispatch(createTheme({title: this.title, 
      description: this.description, 
      imagePath: this.image,
      books: this.chosenBooks
      }))
      
    }
    
    addBooks()
    {
      for (let book of this.chosenBooks) {
        this.store.dispatch(addBookToTheme({themeId: this.newId, bookId: book.id}))
      }
    }
}