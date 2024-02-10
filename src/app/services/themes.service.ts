import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { environment } from 'src/environments/environment';
import { Theme } from '../models/theme';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor(private httpClient: HttpClient) { 

  }

  getAllThemes() {
    return this.httpClient.get<Theme[]>("http://localhost:3000/themes")
    
  }

  getThemeById(id: number) {
    return this.httpClient.get<Theme>(`http://localhost:3000/themes/${id}`)
    
  }

  getAllReviews(themeid: number) {
    return this.httpClient.get<Review[]>(`http://localhost:3000/reviews?themeId=${themeid}`)
  }

  addNewReview(review: Review) {
    return this.httpClient.post<Review>(
      "http://localhost:3000/reviews", review)
  }
}
