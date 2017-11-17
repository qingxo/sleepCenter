import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarDistributionComponent } from './bar-distribution.component';

describe('BarDistributionComponent', () => {
  let component: BarDistributionComponent;
  let fixture: ComponentFixture<BarDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
