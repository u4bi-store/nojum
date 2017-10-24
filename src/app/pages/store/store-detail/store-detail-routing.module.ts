import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreDetailComponent } from './store-detail.component';
import { StoreDetailMainComponent } from './store-detail-main/store-detail-main.component';
import { StoreDetailMainHeaderComponent } from './store-detail-main/store-detail-main-header/store-detail-main-header.component';
import { StoreDetailMainInfoComponent } from './store-detail-main/store-detail-main-info/store-detail-main-info.component';
import { StoreDetailMainShareComponent } from './store-detail-main/store-detail-main-share/store-detail-main-share.component';
import { StoreDetailMainReviewComponent } from './store-detail-main/store-detail-main-review/store-detail-main-review.component';
import { StoreDetailMainInfoItemComponent } from './store-detail-main/store-detail-main-info/store-detail-main-info-item/store-detail-main-info-item.component';

import {
  MatButtonModule,
  MatTabsModule,
} from '@angular/material';

const routes: Routes = [
  {
    path : '', component : StoreDetailComponent,
    children : [
      { path: '', component: StoreDetailMainComponent },
      { path: 'buy', loadChildren: './store-detail-buy/store-detail-buy.module#StoreDetailBuyModule' },
      { path:'**',redirectTo:'', pathMatch:'full' }
    ]
  },
  {
    path : '**', redirectTo : ''
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatTabsModule
  ],
  declarations: [
    StoreDetailComponent,
    StoreDetailMainComponent,
    StoreDetailMainHeaderComponent,
    StoreDetailMainInfoComponent,
    StoreDetailMainShareComponent,
    StoreDetailMainReviewComponent,
    StoreDetailMainInfoItemComponent
  ],
  exports: [RouterModule]
})
export class StoreDetailRoutingModule { }
