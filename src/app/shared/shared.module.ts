import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialMediaModule } from './components/micro-components/social-media/social-media.module';
import { LogoModule } from './components/micro-components/logo/logo.module';
import { MenuListModule } from './components/micro-components/menu-list/menu-list.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SocialMediaModule,
    LogoModule,
    MenuListModule,
  ],
})
export class SharedModule {
}
