import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-xvpaeqqrgmrc7cy1.us.auth0.com',
      clientId: '9B3oZpAik3LLsc9BfE7NDYIwI7vvTjDK',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
