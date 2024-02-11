import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';
import { rateJourney } from 'src/app/store/user/user.action';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() userId: string = '';
  @Input() themeId: string = '';
  @Input() maxRating: number = 5;
  @Input() rating: number = 0;
  @Output() selectedRating: EventEmitter<number> = new EventEmitter<number>();
  @Output() comment: string = '';

  stars: number[] = [];

  constructor(private ReviewService: ReviewService, private store: Store<AppState>) {
    this.stars = Array(1, 2, 3, 4, 5);
  }

  rate(rating: number) {
    this.rating = rating;
    this.selectedRating.emit(rating);
  }

  onRatingSelected() {
    if(this.userId != '') {
      this.store.dispatch(rateJourney({review: {
        userId: this.userId,
        themeId: this.themeId,
        rating: this.rating,
        comment: this.comment
      } as Review
      }))
    }
  }
}
