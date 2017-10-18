import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule,
         MatToolbarModule,
         MatInputModule,
         MatStepperModule,
         MatRadioModule,
         MatListModule,
         MatIconModule,
         MatTabsModule
       } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
       
import { MainComponent } from './pages/main/main.component';
import { MainHeaderComponent } from './pages/main/main-header/main-header.component';
import { MainInfoComponent } from './pages/main/main-info/main-info.component';
import { MainFeatureComponent } from './pages/main/main-feature/main-feature.component';
import { MainFooterComponent } from './pages/main/main-footer/main-footer.component';

import { LoginComponent } from './pages/login/login.component';

import { CreateComponent } from './pages/create/create.component';

import { SuccessComponent } from './pages/success/success.component';

import { StoreComponent } from './pages/store/store.component';

import { StoreMainComponent } from './pages/store/store-main/store-main.component';
import { StoreMainHeaderComponent } from './pages/store/store-main/store-main-header/store-main-header.component';
import { StoreMainListComponent } from './pages/store/store-main/store-main-list/store-main-list.component';
import { StoreMainFooterComponent } from './pages/store/store-main/store-main-footer/store-main-footer.component';

import { StoreDetailComponent } from './pages/store/store-detail/store-detail.component';
import { StoreDetailHeaderComponent } from './pages/store/store-detail/store-detail-header/store-detail-header.component';
import { StoreDetailInfoComponent } from './pages/store/store-detail/store-detail-info/store-detail-info.component';
import { StoreDetailShareComponent } from './pages/store/store-detail/store-detail-share/store-detail-share.component';
import { StoreDetailReviewComponent } from './pages/store/store-detail/store-detail-review/store-detail-review.component';
import { StoreDetailInfoItemComponent } from './pages/store/store-detail/store-detail-info/store-detail-info-item/store-detail-info-item.component';

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
    path : 'success', component : SuccessComponent
  },
  {
    path : 'store/:id', component : StoreComponent,
      children: [
        { path: '', redirectTo: 'main', pathMatch: 'full' },
        { path: 'main', component: StoreMainComponent },
        { path: 'detail/:id', component: StoreDetailComponent }
      ]
  },
  {
    path : '', redirectTo : '/main', pathMatch : 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    MatListModule,
    MatIconModule,
    MatTabsModule
  ],
  declarations: [
    MainComponent,
    MainHeaderComponent,
    MainInfoComponent,
    MainFeatureComponent,
    MainFooterComponent,
    LoginComponent,
    CreateComponent,
    SuccessComponent,
    StoreComponent,
    StoreMainComponent,
    StoreMainHeaderComponent,
    StoreMainListComponent,
    StoreMainFooterComponent,
    StoreDetailComponent,
    StoreDetailHeaderComponent,
    StoreDetailInfoComponent,
    StoreDetailShareComponent,
    StoreDetailReviewComponent,
    StoreDetailInfoItemComponent
  ],
  exports : [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    MatListModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class AppRoutingModule { }