import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmMsmComponent } from './hm-msm.component';

describe('HmMsmComponent', () => {
  let component: HmMsmComponent;
  let fixture: ComponentFixture<HmMsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmMsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmMsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
