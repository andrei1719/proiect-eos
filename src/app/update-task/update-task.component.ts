import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task, TaskStatus } from '../task';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent implements OnInit{

  id!: number;
  task: Task = new Task();
  users: User[] = [];
  statuses = TaskStatus;

  constructor(
    private taskService: TaskService,
     private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit() {
    this.taskService.updateTask(this.id, this.task).subscribe(data => {
      this.goToTaskList();
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.taskService.getTaskById(this.id).subscribe(data => {
        this.task = data;
    })
    this.userService.getUsers().subscribe(data =>{
      this.users = data;
    })
  }

  goToTaskList() {
    this.router.navigate(['tasks']);
  }

  

}
