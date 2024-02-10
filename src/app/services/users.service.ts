import { HttpClient } from '@angular/common/http';``
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {

  }

  getAllUsers() {
    return this.httpClient.get<User[]>("http://localhost:3000/users")
  }

  getUserById(id: number) {
    return this.httpClient.get<User>(`http://localhost:3000/users/${id}`)
  }

  saveUser(userId: number) {
    return this.httpClient.post("http://localhost:3000/users/" + userId, {});
  }

  loginUser(username: string, password: string) {
    return this.httpClient.get<User[]>(
      "http://localhost:3000" + '/users' + `?username=${username}&password=${password}`
    ).pipe(
      map((users) => {
        return users[0]
      })
    )
  }

  signUpUser(user: User) {
    return this.httpClient.post<User>(
      "http://localhost:3000/users", user)
  }
}
