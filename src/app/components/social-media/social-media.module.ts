import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media.component';
import { KeyboardManagerModule } from '../../shared/directives/keyboard-manager/keyboard-manager.module';
import { FocusTrapModule } from '../../shared/directives/focus-trap/focus-trap.module';

@NgModule({
  declarations: [
    SocialMediaComponent,
  ],
  exports: [
    SocialMediaComponent
  ],
  imports: [
    CommonModule,
    KeyboardManagerModule,
    FocusTrapModule
  ]
})
export class SocialMediaModule { }
