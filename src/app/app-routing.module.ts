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
import { MainFooterComponent } from './pages/main/main-footer/main-footer.component';

import { LoginComponent } from './pages/login/login.component';

import { CreateComponent } from './pages/create/create.component';

const routes : Routes = [
  {
    path : 'main', component : MainComponent
  },
  {
    path : 'create', component : CreateComponent
  },
  {
    path : 'login', component : LoginComponent
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
    MainFeatureComponent,
    MainFooterComponent,
    LoginComponent,
    CreateComponent
  ],
  exports : [
    RouterModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class AppRoutingModule { }