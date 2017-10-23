import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartAssessComponent } from './echart-assess.component';

describe('EchartAssessComponent', () => {
  let component: EchartAssessComponent;
  let fixture: ComponentFixture<EchartAssessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartAssessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartAssessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
