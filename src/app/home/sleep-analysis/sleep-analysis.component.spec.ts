import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepAnalysisComponent } from './sleep-analysis.component';

describe('SleepAnalysisComponent', () => {
  let component: SleepAnalysisComponent;
  let fixture: ComponentFixture<SleepAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
