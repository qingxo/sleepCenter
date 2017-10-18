import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPatientsComponent } from './new-patients.component';

describe('NewPatientsComponent', () => {
  let component: NewPatientsComponent;
  let fixture: ComponentFixture<NewPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
