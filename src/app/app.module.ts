import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToTopModule } from './shared/scroll-to-top/scroll-to-top.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ErrorsModule,
    HomeModule,
    ScrollToTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
