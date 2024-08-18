import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/component/auth/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // Add other routes for the Auth module if needed
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
