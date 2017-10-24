import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreDetailBuyComponent } from './store-detail-buy.component';

import { MatButtonModule } from '@angular/material';

const routes: Routes = [
  { path : '', component : StoreDetailBuyComponent },
  { path : '**', redirectTo : '' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [StoreDetailBuyComponent],
  exports: [RouterModule]
})
export class StoreDetailBuyRoutingModule { }
