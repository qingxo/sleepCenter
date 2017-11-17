import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArealDistributionComponent } from './areal-distribution.component';

describe('MainPageComponent', () => {
  let component: ArealDistributionComponent;
  let fixture: ComponentFixture<ArealDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArealDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArealDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
