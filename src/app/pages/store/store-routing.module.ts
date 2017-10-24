import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store.component';
import { StoreToolbarComponent } from '../../shared/store-toolbar/store-toolbar.component';

import { StoreMainComponent } from './store-main/store-main.component';
import { StoreMainHeaderComponent } from './store-main/store-main-header/store-main-header.component';
import { StoreMainListComponent } from './store-main/store-main-list/store-main-list.component';
import { StoreMainFooterComponent } from './store-main/store-main-footer/store-main-footer.component';

import { MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule
} from '@angular/material';

const routes: Routes = [
  {
    path : '', component : StoreComponent,
      children: [
        { path: '', component: StoreMainComponent },
        { path: 'order', loadChildren: './store-order/store-order.module#StoreOrderModule' },
        { path: 'detail/:id', loadChildren: './store-detail/store-detail.module#StoreDetailModule' },
        { path: 'detail', redirectTo: '', pathMatch: 'full' },
        { path:'**',redirectTo:'', pathMatch:'full' }
      ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [
    StoreComponent,
    StoreToolbarComponent,
    StoreMainComponent,
    StoreMainHeaderComponent,
    StoreMainListComponent,
    StoreMainFooterComponent
  ],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
