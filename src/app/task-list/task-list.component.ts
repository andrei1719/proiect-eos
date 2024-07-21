import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

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
    private router: Router) {

  }

  ngOnInit(): void {
    this.getTasks(this.task);
  }

  ngOnChanges() {
    console.log("AAAAAA")
  }

  getTasks(task: Task) {
    this.taskService.getTasks(task).subscribe(data => {
      this.tasks = data;
    })
  }
}
