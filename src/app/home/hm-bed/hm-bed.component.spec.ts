import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmBedComponent } from './hm-bed.component';

describe('HmBedComponent', () => {
  let component: HmBedComponent;
  let fixture: ComponentFixture<HmBedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmBedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
