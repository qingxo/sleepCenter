import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepMedicalComponent } from './sleep-medical.component';

describe('SleepMedicalComponent', () => {
  let component: SleepMedicalComponent;
  let fixture: ComponentFixture<SleepMedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepMedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
