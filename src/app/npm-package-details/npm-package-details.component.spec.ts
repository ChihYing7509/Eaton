import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmPackageDetailsComponent } from './npm-package-details.component';

describe('NpmPackageDetailsComponent', () => {
  let component: NpmPackageDetailsComponent;
  let fixture: ComponentFixture<NpmPackageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmPackageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmPackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
