import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeComponent } from './dark-mode.component';



@NgModule({
  declarations: [
    DarkModeComponent
  ],
  exports: [
    DarkModeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DarkModeModule { }
