import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent implements OnInit{

  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private router: Router) {

    }

  users: User[] = [];
  task: Task = new Task;
  statuses = TaskStatus;
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  saveTask() {
    this.taskService.createTask(this.task).subscribe(
      data => {
        this.goToTaskList();
      },
      error => console.log(error)
    );
  }

  goToTaskList() {
    this.router.navigate(['/tasks']);
  }

  onSubmit() {
    this.saveTask();
  }
}
