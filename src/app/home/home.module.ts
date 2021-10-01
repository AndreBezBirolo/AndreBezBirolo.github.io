import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ScrollToTopModule } from '../shared/scroll-to-top/scroll-to-top.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ScrollToTopModule
  ],
})
export class HomeModule { }
