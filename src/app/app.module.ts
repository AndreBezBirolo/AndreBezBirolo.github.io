import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import HomeModule from './pages/home/home.module';
import { ErrorsModule } from './shared/views/errors/errors.module';
import { DarkModeModule } from './shared/components/dark-mode-button/dark-mode.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuListModule } from './shared/components/micro-components/menu-list/menu-list.module';
import { LogoModule } from './shared/components/micro-components/logo/logo.module';
import { SocialMediaModule } from './shared/components/micro-components/social-media/social-media.module';
import { ScrollToTopModule } from './shared/components/micro-components/scroll-to-top-button/scroll-to-top.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ErrorsModule,
    HomeModule,
    ScrollToTopModule,
    DarkModeModule,
    HttpClientModule,
    MenuListModule,
    LogoModule,
    SocialMediaModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
