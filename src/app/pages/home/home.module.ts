import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { HomeComponent } from './home.component';
import { IntroductoryComponent } from './introductory/introductory.component';
import { PrinciplesComponent } from './principles/principles.component';
import { ProjectsComponent } from './projects/projects.component';
import { TrajectoryComponent } from './trajectory/trajectory.component';
import { StartingComponent } from './starting/starting.component';
import { ToolsComponent } from './tools/tools.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CallToMeComponent } from './call-to-me/call-to-me.component';
import { KeyboardManagerModule } from '../../shared/directives/keyboard-manager/keyboard-manager.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ButtonModule } from '../../shared/components/button/button.module';

@NgModule({
  declarations: [
    HomeComponent,
    CallToMeComponent,
    FeedbackComponent,
    IntroductoryComponent,
    PrinciplesComponent,
    ProjectsComponent,
    StartingComponent,
    ToolsComponent,
    TrajectoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxUsefulSwiperModule,
    KeyboardManagerModule,
    LazyLoadImageModule,
    ButtonModule
  ],
})
export default class HomeModule {
}