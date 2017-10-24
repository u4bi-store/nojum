import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreComponent } from './store.component';
import { StoreToolbarComponent } from '../../shared/store-toolbar/store-toolbar.component';

import { StoreMainComponent } from './store-main/store-main.component';
import { StoreMainHeaderComponent } from './store-main/store-main-header/store-main-header.component';
import { StoreMainListComponent } from './store-main/store-main-list/store-main-list.component';
import { StoreMainFooterComponent } from './store-main/store-main-footer/store-main-footer.component';

import { StoreDetailComponent } from './store-detail/store-detail.component';
import { StoreDetailMainComponent } from './store-detail/store-detail-main/store-detail-main.component';
import { StoreDetailMainHeaderComponent } from './store-detail/store-detail-main/store-detail-main-header/store-detail-main-header.component';
import { StoreDetailMainInfoComponent } from './store-detail/store-detail-main/store-detail-main-info/store-detail-main-info.component';
import { StoreDetailMainShareComponent } from './store-detail/store-detail-main/store-detail-main-share/store-detail-main-share.component';
import { StoreDetailMainReviewComponent } from './store-detail/store-detail-main/store-detail-main-review/store-detail-main-review.component';
import { StoreDetailMainInfoItemComponent } from './store-detail/store-detail-main/store-detail-main-info/store-detail-main-info-item/store-detail-main-info-item.component';

import { StoreDetailBuyComponent } from './store-detail/store-detail-buy/store-detail-buy.component';

import { MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatStepperModule,
  MatRadioModule,
  MatListModule,
  MatIconModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';

const routes: Routes = [
  {
    path : '', component : StoreComponent,
      children: [
        { path: '', component: StoreMainComponent },
        { path: 'order', loadChildren: './store-order/store-order.module#StoreOrderModule' },
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
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule
  ],
  declarations: [
    StoreComponent,
    StoreToolbarComponent,
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
    StoreDetailBuyComponent
  ],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
