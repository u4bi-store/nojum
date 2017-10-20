import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
  MatStepperModule,
  MatRadioModule,
  MatListModule,
  MatIconModule
} from '@angular/material';

const routes: Routes = [
  {
    path : '', component : CreateComponent
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
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [CreateComponent],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
