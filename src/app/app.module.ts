import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreService } from './providers/core.service';
import { ParamService } from './providers/param.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { StoreToolbarComponent } from './shared/store-toolbar/store-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StoreToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    CoreService,
    ParamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
