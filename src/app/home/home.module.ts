import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IntrodutoryComponent } from './introdutory/introdutory.component';
import { ButtonModule } from '../shared/components/button/button.module';
import { PrinciplesComponent } from './principles/principles.component';


@NgModule({
  declarations: [
    HomeComponent,
    IntrodutoryComponent,
    PrinciplesComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
})
export class HomeModule { }
