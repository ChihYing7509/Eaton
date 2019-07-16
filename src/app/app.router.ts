import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComingSoonComponent } from './comingsoon/comingsoon.component';
import { OverviewComponent } from './overview/overview.component';
import { NpmPackagesComponent } from './npm-packages/npm-packages.component';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/Overview',
    pathMatch: 'full'
  },
  {
    path: 'Overview',
    component: OverviewComponent,
    data: {title: 'Resources Overview'}
  },
  {
    path: 'NPMpackages',
    component: NpmPackagesComponent,
    data: {title: 'NPM Packages'}
  },
  {
    path: 'DesignPatterns',
    component: DesignPatternsComponent,
    data: {title: 'Design Patterns / Examples'}
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
