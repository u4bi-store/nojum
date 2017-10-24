import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreOrderComponent } from '../store-order/store-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    MatInputModule,
    MatButtonModule
} from '@angular/material';

const routes: Routes = [
  {
    path : '', component : StoreOrderComponent
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
    StoreOrderComponent
  ],
  exports: [RouterModule]
})
export class StoreOrderRoutingModule { }
