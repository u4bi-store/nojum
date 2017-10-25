import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './environments/environment';

import { CoreService } from './providers/core.service';
import { FirebasePhoneAuthService } from './providers/firebase-phone-auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [
    CoreService,
    FirebasePhoneAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
