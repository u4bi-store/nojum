import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule,
         MatToolbarModule
       } from '@angular/material';

import { MainComponent } from './pages/main/main.component';
import { MainHeaderComponent } from './pages/main/main-header/main-header.component';
import { MainInfoComponent } from './pages/main/main-info/main-info.component';
import { MainFeatureComponent } from './pages/main/main-feature/main-feature.component';

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
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: [
    MainComponent,
    MainHeaderComponent,
    MainInfoComponent,
    MainFeatureComponent
  ],
  exports : [
    RouterModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class AppRoutingModule { }