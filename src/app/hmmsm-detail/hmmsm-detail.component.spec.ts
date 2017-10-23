import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmmsmDetailComponent } from './hmmsm-detail.component';

describe('HmmsmDetailComponent', () => {
  let component: HmmsmDetailComponent;
  let fixture: ComponentFixture<HmmsmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmmsmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmmsmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
