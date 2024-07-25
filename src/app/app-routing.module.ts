import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { SearchComponent } from './search/search.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'tasks', component: TaskListComponent},
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: 'create-task', component: CreateTaskComponent},
  {path: 'search-task', component:SearchComponent},
  {path: 'update-task/:id', component: UpdateTaskComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
