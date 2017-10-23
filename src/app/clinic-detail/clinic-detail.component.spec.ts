import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicDetailComponent } from './clinic-detail.component';

describe('ClinicDetailComponent', () => {
  let component: ClinicDetailComponent;
  let fixture: ComponentFixture<ClinicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
