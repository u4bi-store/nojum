import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { MainFeatureComponent } from './main-feature/main-feature.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

import { MatButtonModule } from '@angular/material';

const routes: Routes = [
  {
    path : '', component : MainComponent
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
  declarations: [
    MainComponent,
    MainHeaderComponent,
    MainInfoComponent,
    MainFeatureComponent,
    MainFooterComponent
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
