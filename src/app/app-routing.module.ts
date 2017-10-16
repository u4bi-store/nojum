import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

import { MainComponent } from './pages/main/main.component';
import { MainHeaderComponent } from './pages/main/main-header/main-header.component';

const routes : Routes = [
  {
    path : 'main', component : MainComponent
  },  
  {
    path : '', redirectTo : '/main', pathMatch : 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatButtonModule
  ],
  declarations: [
    MainComponent,
    MainHeaderComponent
  ],
  exports : [
    RouterModule,
    MatButtonModule
  ]
})
export class AppRoutingModule { }