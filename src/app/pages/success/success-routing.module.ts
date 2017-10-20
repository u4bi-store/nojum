import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessComponent } from './success.component';

import { MatButtonModule } from '@angular/material';

const routes: Routes = [
  {
    path : '', component : SuccessComponent
  },
  {
    path : '**', redirectTo : ''
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule
  ],
  declarations: [SuccessComponent],
  exports: [RouterModule]
})
export class SuccessRoutingModule { }
