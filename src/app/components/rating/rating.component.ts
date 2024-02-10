import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() maxRating: number = 5;
  @Input() rating: number = 0;
  @Output() selectedRating: EventEmitter<number> = new EventEmitter<number>();

  stars: number[] = [];

  constructor() {
    this.stars = Array(1, 2, 3, 4, 5);
  }

  rate(rating: number) {
    this.rating = rating;
    this.selectedRating.emit(rating);
  }
}
