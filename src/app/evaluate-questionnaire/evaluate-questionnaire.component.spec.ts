import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateQuestionnaireComponent } from './evaluate-questionnaire.component';

describe('PatientDetailComponent', () => {
  let component: EvaluateQuestionnaireComponent;
  let fixture: ComponentFixture<EvaluateQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
