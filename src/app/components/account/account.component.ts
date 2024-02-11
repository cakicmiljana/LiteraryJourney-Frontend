import { Component } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { User } from 'src/app/models/user';
import { ThemesService } from 'src/app/services/theme.service';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/models/book';
import { Review } from 'src/app/models/review';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store'
import { selectCompletedBooksFeature, selectCompletedBooksList, selectCompletedThemesFeature, selectCompletedThemesList, selectCurrentThemeFeature, selectUserFeature } from 'src/app/store/user/user.selector';
import { Logout, completeBook, completeTheme, getCompletedThemes, rateJourney } from 'src/app/store/user/user.action';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  user$: Observable<User> = of();
  user: User = {
    id: '',
    userType: '',
    username: '',
    password: '',
    country: '',
    themeIDs: [],
    books: [],
    statistics: {
      userId: '',
      genres: new Map<string, number>(),
      pages: new Map<string, number>(),
      authors: new Map<string, number>(),
      languages: new Map<string, number>(),
    }
  }
  username: string = '';
  country: string = '';

  currentJourney: Theme = 
  { 
    id: '',
    title: '',
    books: [],
    genres: [],
    reviews: []
  }
  completedBook$: Observable<Book[]> = of([]);
  completedBooksNumber: number = 0;
  
  completedJourney$: Observable<Theme[]> | null = of([]);
  journeyCompleted: boolean = false;

  journeyId: string = '';
  userRating: number = 0;
  themeForRating: string = '';
  
  constructor(private ThemesService: ThemesService, private store: Store<AppState>) {
    
  }
  
  ngOnInit(): void {
    this.user$ = this.store.select(selectUserFeature);
    this.user$.subscribe((state: User) => {
      this.user = state
      
      console.log("USER ", state)
      console.log("USERNAME ", this.user.username)
    })
    
    this.store.dispatch(getCompletedThemes({userId: this.user.id}));
    this.completedJourney$ = this.store.select(selectCompletedThemesList)
    this.completedBook$ = this.store.select(selectCompletedBooksList);
    
    // this.completedBook$.subscribe((state: string) => {
    //   this.completedBooksNumber = state.length
    // })
    
    this.store.select(selectCurrentThemeFeature).subscribe((state: Theme) => {
      this.currentJourney=state
    })
    
  }
  
  completeBook(book: Book) {
    this.completedBooksNumber++;
    this.store.dispatch(completeBook({userId: this.user.id, book}))
    
    if(this.currentJourney && this.completedBooksNumber === this.currentJourney.books.length) {
      this.journeyId=this.currentJourney.id;

      this.journeyCompleted = true;
      this.completeJourney(this.currentJourney);

      this.themeForRating = this.currentJourney.id;
      this.currentJourney=
      {
        id: '',
        title: '',
        books: [],
        genres: [],
        reviews: []
      }
    }
  }

  completeJourney(theme: Theme) {
    this.store.dispatch(completeTheme({userId: this.user?.id, theme: theme, }))
  }
}
