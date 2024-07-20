import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasksList().subscribe(data => {
      this.tasks = data;
    })
  }
}
