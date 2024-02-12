import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { RecommendationService } from 'src/app/services/recommendation.service';
import { addBookToTheme } from 'src/app/store/user/user.action';
import { selectCreatedThemeIdFeature, selectUserFeature } from 'src/app/store/user/user.selector';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent {
  userId: string = '';
  recsAuthor$: Observable<Book[]> = new Observable<Book[]>();
  recsGenre$: Observable<Book[]> = new Observable<Book[]>();
  
  chosenBooks: Book[] = [];
  createdId: Observable<string> = of('')
  newId: string = '';

  constructor(private booksService: BooksService, private recsService: RecommendationService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectUserFeature).subscribe((user) => {
      this.userId = user.id;
    })

    this.store.select(selectCreatedThemeIdFeature).subscribe((id) => {
      this.newId = id;
    })

    this.recsAuthor$ = this.recsService.getRecommendationByAuthor(this.userId);
    this.recsGenre$ = this.recsService.getRecommendationByGenre(this.userId);
  }

  
  chooseBook(book: Book) {
    this.chosenBooks.push(book);
    // this.createdId = this.themesService.createTheme(this.title, this.description, this.image)
  }
    
  addBooks()
  {
    for (let book of this.chosenBooks) {
      this.store.dispatch(addBookToTheme({themeId: this.newId, bookId: book.id}))
    }
  }
}
