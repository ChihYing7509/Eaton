import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs'

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.router';
import {NavigationService} from './shared/navigation.service';
import { OverviewComponent } from './overview/overview.component';
import { NpmPackagesComponent } from './npm-packages/npm-packages.component';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';
import { FilterPipe} from './shared/filter.pipe';
import { DesignPatternDetailsComponent } from './design-pattern-details/design-pattern-details.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    NpmPackagesComponent,
    DesignPatternsComponent,
    FilterPipe,
    DesignPatternDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
