import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  { path : 'main', loadChildren: './pages/main/main.module#MainModule' },
  { path : 'create', loadChildren: './pages/create/create.module#CreateModule' },
  { path : 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path : 'reset', loadChildren: './pages/reset/reset.module#ResetModule' },
  { path : 'success', loadChildren: './pages/success/success.module#SuccessModule' },
  { path : 'store/:id', loadChildren: './pages/store/store.module#StoreModule' },
  { path : 'store', redirectTo : 'main', pathMatch : 'full' },
  { path:'**',redirectTo:'main', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }