import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleDistributionComponent } from './circle-distribution.component';

describe('CirlesComponent', () => {
  let component: CircleDistributionComponent;
  let fixture: ComponentFixture<CircleDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
