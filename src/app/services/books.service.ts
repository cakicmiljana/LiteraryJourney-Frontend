import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { 

  }

  getAll() {
    return this.httpClient.get<Book[]>("http://localhost:3000/books")
    
  }
}
