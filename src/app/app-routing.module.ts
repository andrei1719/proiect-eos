import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { SearchComponent } from './search/search.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
  {path: 'tasks', component: TaskListComponent},
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: 'create-task', component: CreateTaskComponent},
  {path: 'search-task', component:SearchComponent},
  {path: 'update-task/:id', component: UpdateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
