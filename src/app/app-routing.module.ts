import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { MainHeaderComponent } from './pages/main/main-header/main-header.component';
import { MainInfoComponent } from './pages/main/main-info/main-info.component';
import { MainFeatureComponent } from './pages/main/main-feature/main-feature.component';
import { MainListComponent } from './pages/main/main-list/main-list.component';
import { MainFooterComponent } from './pages/main/main-footer/main-footer.component';

import { DragScrollModule } from 'angular2-drag-scroll';
import { MatButtonModule } from '@angular/material';

const routes : Routes = [
  { path : '', component : MainComponent },
  { path : 'create', loadChildren: './pages/create/create.module#CreateModule' },
  { path : 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path : 'reset', loadChildren: './pages/reset/reset.module#ResetModule' },
  { path : 'success', loadChildren: './pages/success/success.module#SuccessModule' },
  { path : 'store/:id', loadChildren: './pages/store/store.module#StoreModule' },
  { path : 'store', redirectTo : '', pathMatch : 'full' },
  { path:'**',redirectTo:'', pathMatch:'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    DragScrollModule
  ],
  declarations: [
    MainComponent,
    MainHeaderComponent,
    MainInfoComponent,
    MainFeatureComponent,
    MainListComponent,
    MainFooterComponent
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }