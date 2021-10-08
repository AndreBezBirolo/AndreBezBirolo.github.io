import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { TrajectoryComponent } from './trajectory/trajectory.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'André Bez Birolo - Desenvolvedor Web'
    }
  },
  {
    path: 'trajectory',
    component: TrajectoryComponent,
    data: {
      title: 'André Bez Birolo - Trajetória'
    }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'André Bez Birolo - Ops..'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
