import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { HomeComponent } from './home.component';
import { IntrodutoryComponent } from './introdutory/introdutory.component';
import { ButtonModule } from '../shared/components/button/button.module';
import { PrinciplesComponent } from './principles/principles.component';
import { ProjectsComponent } from './projects/projects.component';
import { TrajectoryComponent } from './trajectory/trajectory.component';
import { StartingComponent } from './starting/starting.component';
import { ToolsComponent } from './tools/tools.component';
import { KeyboardManagerModule } from '../shared/directives/keyboard-manager/keyboard-manager.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { CallToMeComponent } from './call-to-me/call-to-me.component';

@NgModule({
  declarations: [
    HomeComponent,
    IntrodutoryComponent,
    PrinciplesComponent,
    ProjectsComponent,
    TrajectoryComponent,
    StartingComponent,
    ToolsComponent,
    FeedbackComponent,
    CallToMeComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
    NgxUsefulSwiperModule,
    KeyboardManagerModule
  ],
})
export class HomeModule { }
