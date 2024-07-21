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
export class SearchComponent implements OnInit{

  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private router: Router) {

    }

    isFormSent: boolean = false;
    users: User[] = [];
    task: Task = new Task;
    statuses = TaskStatus;

    ngOnInit(): void {
      this.userService.getUsers().subscribe(data => {
        this.users = data;
      })
    }

    onSubmit() {
      this.isFormSent = true;
    }
}
