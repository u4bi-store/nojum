import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    MatInputModule,
    MatButtonModule
} from '@angular/material';

const routes: Routes = [
  {
    path : '', component : LoginComponent
  },
  {
    path : '**', redirectTo : ''
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
