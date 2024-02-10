import { Component, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser'
import { Theme } from 'src/app/models/theme';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  @Input() books: Book[] | null = null;
  
  selectedBook: number = 0;
  @Output() isDropdownOpen: boolean = false;
  @Output() isBiographyOn: boolean = false;
  
  constructor(private BooksService: BooksService, private sanitizer: DomSanitizer) {
    this.books?.map(book => {
      this.sanitizer.bypassSecurityTrustResourceUrl(book.externalLink)
    })
  }

  booksDropdown(event: Event) {
    this.isDropdownOpen = !this.isDropdownOpen;
    event.stopPropagation();
  }

  preventClose(event: Event) {
    event.stopPropagation();
  }

  biographyOverlay() {
    this.isBiographyOn = !this.isBiographyOn;
    if(this.isBiographyOn) {
      document.getElementById("overlay")!.style.display = "block";
    }
    else {
      document.getElementById("overlay")!.style.display = "none";
    }
  }

  startJourney() {
    
  }

  private _book: Book | null = null;


  ngOnInit(): void {
    // this.store.subscribe(state => {
    //   this.selectedBook = state.selectedBook
    // })
  }

  @Input()
  set book(value: Book) {
    this._book = value;
  }
}
