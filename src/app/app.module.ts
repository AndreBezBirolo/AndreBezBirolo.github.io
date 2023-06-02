import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ScrollToTopModule } from './shared/components/scroll-to-top-button/scroll-to-top.module';
import HomeModule from './pages/home/home.module';
import { ErrorsModule } from './shared/views/errors/errors.module';
import { DarkModeModule } from './shared/components/dark-mode-button/dark-mode.module';

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
    ScrollToTopModule,
    DarkModeModule,
    HttpClientModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
