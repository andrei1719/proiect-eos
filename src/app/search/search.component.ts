import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { Task, TaskStatus } from '../task';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private router: Router) {
      this.task = {
        user: new User(),
      } as Task;
  }

  isFormSent: boolean = false;
  users: User[] = [];
  task: Task;
  statuses = TaskStatus;
  tasks: Task[] = [];


  ngOnInit(): void {
    this.task.user = new User;
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  onSubmit() {
    this.isFormSent = true;
    this.getTasks(this.task);
  }

  getTasks(task: Task) {
    this.taskService.getTasks(task).subscribe(data => {
      this.tasks = data;
    })
  }
  
  updateTask(id: number) {
    this.router.navigate(['update-task', id]);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(data => {
      this.getTasks(this.task);
    })
  }

}

