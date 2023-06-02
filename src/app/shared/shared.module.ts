import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaModule } from '../components/social-media/social-media.module';
import { LogoModule } from '../components/logo/logo.module';
import { MenuListModule } from '../components/menu-list/menu-list.module';

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
