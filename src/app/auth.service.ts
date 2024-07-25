import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';
  private url = 'http://localhost:8080/api/v1'

  constructor(private http: HttpClient) { }

  login(credentials: {userName: string, password: string}): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          if (typeof window !== 'undefined') {
            localStorage.setItem('jwtToken', response.token);
          }
        })
      );
  }
  
  register(user: {userName: string, password: string}): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, user);
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('jwtToken');
    }
  }

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('jwtToken');
    }
    return null;
  }
  
}
