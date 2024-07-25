import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, tap } from 'rxjs';
import { User } from './user';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  exp: number
  iat: number
  sub: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';
  private url = 'http://localhost:8080/api/v1';
  isLoggedIn: boolean = false;
  currentUser: string = "";

  constructor(private http: HttpClient) { }

  login(credentials: {userName: string, password: string}): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          if (typeof window !== 'undefined') {
            this.isLoggedIn = true;
            localStorage.setItem('jwtToken', response.token);
          }
        })
      );
  }
  
  register(user: {userName: string, password: string}): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, user);
  }

  logout(): void {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      this.http.post(`${this.apiUrl}/logout`, {}, {
        headers: { 'Authorization': `Bearer ${token}` }
      }).subscribe(() => {
        localStorage.removeItem('jwtToken');
      });
    } else {
      localStorage.removeItem('jwtToken');
    }
    this.isLoggedIn = false;
  }

  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('jwtToken');
    }
    return null;
  }
  
  getCurrentUser(): string {
    this.decodeToken();
    return this.currentUser;
  }

  private decodeToken(): void {
    let token = localStorage.getItem('jwtToken')
    if (token === null) {
      return
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token);
      this.currentUser = decoded.sub;
    } catch (error) {
      console.error('Invalid token:', error);
    }
  }
}
