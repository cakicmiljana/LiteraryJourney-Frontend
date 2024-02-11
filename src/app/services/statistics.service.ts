import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  statisticsApi = "http://localhost:5122" + '/Statistics';

  constructor(private httpClient: HttpClient) { }

  getStatisticsByUserId(userId: string) {
    return this.httpClient.get(`${this.statisticsApi}/GetStatisticsByUserId/${userId}`);
  }

  updateStatistics(userId: string, genre: string, pages: number, language: string, author: string) {
    return this.httpClient.put(`${this.statisticsApi}/UpdateStatistics/${userId}/${genre}/${pages}/${language}/${author}`, {});
  }

  deleteStatistics(userId: string) {
    return this.httpClient.delete(`${this.statisticsApi}/DeleteStatistics/${userId}`);
  }
}
