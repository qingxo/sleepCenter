import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartAssess2Component } from './echart-assess2.component';

describe('EchartAssess2Component', () => {
  let component: EchartAssess2Component;
  let fixture: ComponentFixture<EchartAssess2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartAssess2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartAssess2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
