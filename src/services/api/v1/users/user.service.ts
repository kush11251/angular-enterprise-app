// User service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://api.example.com/v1/users';

  constructor(private http: HttpClient) {}

  /**
   * Fetches a list of users
   * @returns {IUser[]} A list of users
   */
  fetchUsers(): any {
    return this.http.get<IUser[]>(this.apiUrl);
  }
}