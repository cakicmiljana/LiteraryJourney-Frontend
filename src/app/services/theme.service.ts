import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { environment } from 'src/environments/environment';
import { Theme } from '../models/theme';
import { Review } from '../models/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  private themeApi = "http://localhost:5122" + '/Theme';

  constructor(private httpClient: HttpClient) { 

  }
  
  createTheme(theme: Theme) {
    return this.httpClient.post<Theme>(this.themeApi + '/CreateTheme', theme)
  }
  
  getThemeById(id: string) {
    return this.httpClient.get<Theme>(`${this.themeApi}/GetThemeById/${id}`) 
  }

  updateThemeDescription(id: string, description: string) {
    return this.httpClient.put<Theme>(`${this.themeApi}/UpdateThemeDescription/${id}/${description}`, {})
  }

  deleteTheme(id: string) {
    return this.httpClient.delete(`${this.themeApi}/DeleteTheme/${id}`)
  }

  getAllBooksInTheme(themeid: string) {
    return this.httpClient.get<Book[]>(`${this.themeApi}/GetAllBooksInTheme/${themeid}`)
  }
  
  // createReview(review: Review) {
  //   return this.httpClient.post<Review>("http://localhost:3000/reviews", review)
  // }

  getAllThemes() {
    return this.httpClient.get<Theme[]>(this.themeApi + '/GetAllThemes')
  }

  addBookToTheme(themeId: string, bookId: string) {
    return this.httpClient.put(`${this.themeApi}/AddBookToTheme/${themeId}/${bookId}`, {})
  }

  getReviews(themeId: string) {
    return this.httpClient.get<Review[]>(`${this.themeApi}/GetReviews/${themeId}`)
  }
}
