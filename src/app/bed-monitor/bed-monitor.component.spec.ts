import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedMonitorComponent } from './bed-monitor.component';

describe('BedMonitorComponent', () => {
  let component: BedMonitorComponent;
  let fixture: ComponentFixture<BedMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
