import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPatternDetailsComponent } from './design-pattern-details.component';

describe('DesignPatternDetailsComponent', () => {
  let component: DesignPatternDetailsComponent;
  let fixture: ComponentFixture<DesignPatternDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignPatternDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPatternDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
