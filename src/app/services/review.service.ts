import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviewApi = "http://localhost:5122" + '/Review';

  constructor(private httpClient: HttpClient) { }

  createReview(review: Review) {
    return this.httpClient.post(this.reviewApi + '/CreateReview', review, {responseType: 'text'});
  }

  getReviewById(id: string) {
    return this.httpClient.get<Review>(`${this.reviewApi}/GetReviewById/${id}`);
  }

  updateReview(id: string, rating: number, comment: string) {
    return this.httpClient.put<Review>(`${this.reviewApi}/UpdateReview/${id}/${rating}/${comment}`, {});
  }

  deleteReview(id: string) {
    return this.httpClient.delete(`${this.reviewApi}/DeleteReview/${id}`);
  }

  getAllReviews() {
    return this.httpClient.get<Review[]>(this.reviewApi + '/GetAllReviews', {responseType: 'json'});
  }

  leaveReview(review: Review) {
    return this.httpClient.post<Review>(this.reviewApi + '/LeaveReview', {userId: review.userId, themeId: review.themeId, rating: review.rating, comment: review.comment}, {responseType: 'json'});
  }
}
