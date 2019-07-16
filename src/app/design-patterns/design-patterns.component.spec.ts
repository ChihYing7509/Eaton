import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPatternsComponent } from './design-patterns.component';

describe('DesignPatternsComponent', () => {
  let component: DesignPatternsComponent;
  let fixture: ComponentFixture<DesignPatternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignPatternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
