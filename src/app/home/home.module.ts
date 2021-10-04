import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IntrodutoryComponent } from './introdutory/introdutory.component';
import { ButtonModule } from '../shared/components/button/button.module';


@NgModule({
  declarations: [
    HomeComponent,
    IntrodutoryComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
})
export class HomeModule { }
