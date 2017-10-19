import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSubjectComponent } from './patient-subject.component';

describe('PatientSubjectComponent', () => {
  let component: PatientSubjectComponent;
  let fixture: ComponentFixture<PatientSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
