import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit{
  @Input() task: Task = new Task;
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private authService: AuthService,
    private router: Router) {

  }

  ngOnInit(): void {
    let currentUsername = this.authService.getCurrentUser();

    this.userService.getUser(currentUsername).subscribe(data => {
      let currentUser = new User;
      currentUser.id = data.id;
      this.task.user = currentUser;
      this.getTasks(this.task);
    })
  }

  getTasks(task: Task) {
    this.taskService.getTasks(task).subscribe(data => {
      this.tasks = data;
    })
  }
}
