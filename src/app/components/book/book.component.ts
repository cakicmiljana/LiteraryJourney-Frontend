import { Component, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from 'src/app/app.state';
import { Book } from 'src/app/models/book';
import { selectCompletedBooksFeature } from 'src/app/store/user/user.selector';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: Book | null = null;
  @Output() completed: boolean = false;
  
  isBiographyOn: boolean = false;
  
  constructor(private store: Store<AppState>) {
    
  }

  ngOnInit(): void {
    this.store.select(selectCompletedBooksFeature).subscribe(books => {
      if(this.book) {
        if(books.entities[this.book?.id])
          this.completed=true;
      }
    })  
  }

  biographyOverlay() {

  }


}
