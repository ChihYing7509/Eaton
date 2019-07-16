import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { TestBed, fakeAsync, getTestBed, tick } from '@angular/core/testing';
import { Router } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';

import {
  routes
} from "./app.router";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { ComingSoonComponent } from './comingsoon/comingsoon.component';

// test module configuration for each test
const testModuleConfig = () => {
    // reset the test environment before initializing it.
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting())
        .configureTestingModule({
            imports: [
                AppModule,
                RouterTestingModule.withRoutes(routes),
            ]
        });
};

fdescribe('Routing service',
    () => {
        beforeEach(() => {
            testModuleConfig();
        });
        it('navigate to "" redirects you to /Overview',
            fakeAsync(() => {
                const injector = getTestBed();
                const router = injector.get(Router);
                const fixture = TestBed.createComponent(ComingSoonComponent);
                fixture.detectChanges();
                tick(50);
                router.navigate(['/'])
                    .then(() => {
                        expect(router.url).toEqual('/Overview');
                    });
            }));

        it('navigate to "Overview" redirects you to /Overview',
            fakeAsync(() => {
                const injector = getTestBed();
                const router = injector.get(Router);
                const fixture = TestBed.createComponent(ComingSoonComponent);
                fixture.detectChanges();
                tick(50);
                router.navigate(['/Overview'])
                    .then(() => {
                        expect(router.url).toEqual('/Overview');
                    });
            }));

        it('navigate to "NPMpackages" redirects you to /NPMpackages',
            fakeAsync(() => {
                const injector = getTestBed();
                const router = injector.get(Router);
                const fixture = TestBed.createComponent(ComingSoonComponent);
                fixture.detectChanges();
                tick(50);
                router.navigate(['/NPMpackages'])
                    .then(() => {
                        expect(router.url).toEqual('/NPMpackages');
                    });
            }));
    });
