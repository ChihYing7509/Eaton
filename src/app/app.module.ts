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
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import {ComingSoonComponent} from './comingsoon/comingsoon.component';

import { AppRoutingModule } from './app.router';
import {NavigationService} from './shared/navigation.service';
import { OverviewComponent } from './overview/overview.component';
import { NpmPackagesComponent } from './npm-packages/npm-packages.component';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';

@NgModule({
  declarations: [AppComponent, ComingSoonComponent, OverviewComponent, NpmPackagesComponent, DesignPatternsComponent],
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
    MatCardModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})

export class AppModule { }
