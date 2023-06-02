import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list.component';
import { RouterModule } from '@angular/router';
import { KeyboardManagerModule } from '../../../directives/keyboard-manager/keyboard-manager.module';
import { FocusTrapModule } from '../../../directives/focus-trap/focus-trap.module';


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
export class MenuListModule {
}
