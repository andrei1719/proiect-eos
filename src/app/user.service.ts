import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/api/v1/users";

  constructor(private httpClient:  HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }
}
