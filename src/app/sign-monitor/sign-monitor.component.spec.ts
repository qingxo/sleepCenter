import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignMonitorComponent } from './sign-monitor.component';

describe('SignMonitorComponent', () => {
  let component: SignMonitorComponent;
  let fixture: ComponentFixture<SignMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
