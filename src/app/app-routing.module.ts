import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrajectoryComponent } from './pages/trajectory/trajectory.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './shared/views/errors/not-found/not-found.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppRoutingModule {
}
