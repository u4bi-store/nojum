import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';

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
    RouterModule.forRoot(routes)
  ],
  declarations: [
    MainComponent
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }