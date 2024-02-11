import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { Theme } from '../models/theme';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userApi = "http://localhost:5122" + '/User';

  constructor(private httpClient: HttpClient) {

  }

  createUser(user: User) {
    return this.httpClient.post<User>(this.userApi + '/CreateUser', user);
  }

  getUserById(id: string) {
    return this.httpClient.get<User>(`${this.userApi}/GetUserById/${id}`);
  }

  updateUserCountry(id: string, country: string) {
    return this.httpClient.put<User>(`${this.userApi}/UpdateUser/${id}/${country}`, {});
  }

  updateUserPassword(id: string, password: string) {
    return this.httpClient.put<User>(`${this.userApi}/ChangePassword/${id}`, {password});
  }

  deleteUser(id: string) {
    return this.httpClient.delete(`${this.userApi}/DeleteUser/${id}`);
  }

  getAllUsers() {
    return this.httpClient.get<User[]>(this.userApi + '/GetAllUsers');
  }

  startTheme(userId: string, themeId: string) {
    return this.httpClient.put(`${this.userApi}/ApplyForTheme/${userId}/${themeId}`, {});
  }

  getAllThemes(userId: string) {
    return this.httpClient.get<Theme[]>(`${this.userApi}/GetAllThemesForUser/${userId}`);
  }

  readBook(userId: string, bookId: string) {
    return this.httpClient.put(`${this.userApi}/ReadBook/${userId}/${bookId}`, {});
  }

  // getAllUsers() {
  //   return this.httpClient.get<User[]>("http://localhost:3000/users")
  // }

  // getUserById(id: number) {
  //   return this.httpClient.get<User>(`http://localhost:3000/users/${id}`)
  // }

  // saveUser(userId: number) {
  //   return this.httpClient.post("http://localhost:3000/users/" + userId, {});
  // }

  loginUser(username: string, password: string) {
    return this.httpClient.post<User>(
      this.userApi + '/LoginUser', {username, password})
  }

  signupUser(user: User) {
    return this.httpClient.post<User>(this.userApi + '/CreateUser', user);
  }

}
