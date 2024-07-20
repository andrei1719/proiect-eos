import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = "http://localhost:8080/api/v1/tasks";
  constructor(private httpClient:  HttpClient) { }

  getTasksList(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.baseUrl}`);
  }

  createTask(task: Task): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, task);
  }
}
