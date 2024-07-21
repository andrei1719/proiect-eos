import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = "http://localhost:8080/api/v1/tasks";
  constructor(private httpClient:  HttpClient) { }

  getTasks(task: Task): Observable<Task[]> {
    let params = new HttpParams(); 
    
    if (task.userID) { params = params.set('assigned', task.userID) }
    if (task.subject) { params = params.set('subject', task.subject) }
    if (task.dueDate) { params = params.set('dueDate', task.dueDate.toString()) }
    if (task.status) { params = params.set('status', task.status) }

    return this.httpClient.get<Task[]>(`${this.baseUrl}`, { params : params});
  }

  createTask(task: Task): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, task);
  }

  
}
