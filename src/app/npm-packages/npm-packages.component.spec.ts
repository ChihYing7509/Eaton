import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmPackagesComponent } from './npm-packages.component';

describe('NpmPackagesComponent', () => {
  let component: NpmPackagesComponent;
  let fixture: ComponentFixture<NpmPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
