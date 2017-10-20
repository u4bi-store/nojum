import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetComponent } from './reset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    MatInputModule,
    MatButtonModule
} from '@angular/material';

const routes: Routes = [
  {
    path : '', component : ResetComponent
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
  declarations: [ResetComponent],
  exports: [RouterModule]
})
export class ResetRoutingModule { }
