import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { NpmPackagesComponent } from './npm-packages/npm-packages.component';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';
import { DesignPatternDetailsComponent } from './design-pattern-details/design-pattern-details.component';
import { NpmPackageDetailsComponent } from './npm-package-details/npm-package-details.component';

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
  {
    path: 'DesignPatternDetail',
    component: DesignPatternDetailsComponent,
  },
  {
    path: 'NPMPackageDetail',
    component: NpmPackageDetailsComponent,
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
