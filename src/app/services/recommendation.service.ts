import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  private themeApi = "http://localhost:5122" + '/Recommendation';
  constructor(private httpClient: HttpClient) { }

  getRecommendationByAuthor(userId: string) {
    return this.httpClient.get<Book[]>(`${this.themeApi}/GetRecommendationByAuthor/${userId}`)
  }

  getRecommendationByGenre(userId: string) {
    return this.httpClient.get<Book[]>(`${this.themeApi}/GetRecommendationByGenre/${userId}`)
  }

  getRecommendationByLanguage(userId: string) {
    return this.httpClient.get<Book[]>(`${this.themeApi}/GetRecommendationByLanguage/${userId}`)
  }
}
