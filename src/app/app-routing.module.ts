import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { SearchComponent } from './search/search.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth-guard.component';

const routes: Routes = [
  {path: 'tasks', component: TaskListComponent, canActivate:[AuthGuard]},
  {path: 'create-task', component: CreateTaskComponent, canActivate:[AuthGuard]},
  {path: 'search-task', component:SearchComponent, canActivate:[AuthGuard]},
  {path: 'update-task/:id', component: UpdateTaskComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
