import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list.component';
import { KeyboardManagerModule } from '../../shared/directives/keyboard-manager/keyboard-manager.module';
import { FocusTrapModule } from '../../shared/directives/focus-trap/focus-trap.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuListComponent
  ],
  exports: [
    MenuListComponent
  ],
  imports: [
    CommonModule,
    KeyboardManagerModule,
    FocusTrapModule,
    RouterModule
  ]
})
export class MenuListModule { }
