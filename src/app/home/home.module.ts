import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IntrodutoryComponent } from './introdutory/introdutory.component';
import { ButtonModule } from '../shared/components/button/button.module';
import { PrinciplesComponent } from './principles/principles.component';
import { ProjectsComponent } from './projects/projects.component';
import { TrajectoryComponent } from './trajectory/trajectory.component';
import { RouterModule } from '@angular/router';
import { StartingComponent } from './starting/starting.component';


@NgModule({
  declarations: [
    HomeComponent,
    IntrodutoryComponent,
    PrinciplesComponent,
    ProjectsComponent,
    TrajectoryComponent,
    StartingComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ],
})
export class HomeModule { }
