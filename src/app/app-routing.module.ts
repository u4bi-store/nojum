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

import { ResetComponent } from './pages/reset/reset.component';

import { CreateComponent } from './pages/create/create.component';

import { SuccessComponent } from './pages/success/success.component';

import { StoreComponent } from './pages/store/store.component';

import { StoreMainComponent } from './pages/store/store-main/store-main.component';
import { StoreMainHeaderComponent } from './pages/store/store-main/store-main-header/store-main-header.component';
import { StoreMainListComponent } from './pages/store/store-main/store-main-list/store-main-list.component';
import { StoreMainFooterComponent } from './pages/store/store-main/store-main-footer/store-main-footer.component';

import { StoreDetailComponent } from './pages/store/store-detail/store-detail.component';

import { StoreDetailMainComponent } from './pages/store/store-detail/store-detail-main/store-detail-main.component';
import { StoreDetailMainHeaderComponent } from './pages/store/store-detail/store-detail-main/store-detail-main-header/store-detail-main-header.component';
import { StoreDetailMainInfoComponent } from './pages/store/store-detail/store-detail-main/store-detail-main-info/store-detail-main-info.component';
import { StoreDetailMainShareComponent } from './pages/store/store-detail/store-detail-main/store-detail-main-share/store-detail-main-share.component';
import { StoreDetailMainReviewComponent } from './pages/store/store-detail/store-detail-main/store-detail-main-review/store-detail-main-review.component';
import { StoreDetailMainInfoItemComponent } from './pages/store/store-detail/store-detail-main/store-detail-main-info/store-detail-main-info-item/store-detail-main-info-item.component';

import { StoreDetailBuyComponent } from './pages/store/store-detail/store-detail-buy/store-detail-buy.component';

import { StoreOrderComponent } from './pages/store/store-order/store-order.component';

import { StoreCartComponent } from './pages/store/store-cart/store-cart.component';

const routes : Routes = [
  {
    path : '', component : MainComponent
  },
  {
    path : 'create', component : CreateComponent
  },
  {
    path : 'login', component : LoginComponent
  },
  {
    path : 'reset', component : ResetComponent
  },
  {
    path : 'success', component : SuccessComponent
  },
  {
    path : 'store/:id', component : StoreComponent,
      children: [
        { path: '', component: StoreMainComponent },
        { path: 'order', component: StoreOrderComponent },
        { path: 'cart', component: StoreCartComponent },
        { path: 'detail/:id', component: StoreDetailComponent,
          children : [
            { path: '', component: StoreDetailMainComponent },
            { path: 'buy', component: StoreDetailBuyComponent },
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path:'**',redirectTo:'', pathMatch:'full' }
          ]
        },
        { path: 'detail', redirectTo: '', pathMatch: 'full' },
        { path:'**',redirectTo:'', pathMatch:'full' }
      ]
  },
  { path : 'store', redirectTo : '', pathMatch : 'full' },
  { path:'**',redirectTo:'', pathMatch:'full' }
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
    ResetComponent,
    CreateComponent,
    SuccessComponent,
    StoreComponent,
    StoreMainComponent,
    StoreMainHeaderComponent,
    StoreMainListComponent,
    StoreMainFooterComponent,
    StoreDetailComponent,
    StoreDetailMainComponent,
    StoreDetailMainHeaderComponent,
    StoreDetailMainInfoComponent,
    StoreDetailMainShareComponent,
    StoreDetailMainReviewComponent,
    StoreDetailMainInfoItemComponent,
    StoreDetailBuyComponent,
    StoreOrderComponent,
    StoreCartComponent
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