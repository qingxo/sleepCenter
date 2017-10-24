import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartEvaluationComponent } from './echart-evaluation.component';

describe('EchartEvaluationComponent', () => {
  let component: EchartEvaluationComponent;
  let fixture: ComponentFixture<EchartEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
