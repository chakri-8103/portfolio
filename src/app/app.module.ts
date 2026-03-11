import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersInterceptor } from './interceptor/headers.interceptor';


@NgModule({
  
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    routingComponents
  ],
  providers: [
    {provide: LocationStrategy, useClass:HashLocationStrategy},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
  },HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
