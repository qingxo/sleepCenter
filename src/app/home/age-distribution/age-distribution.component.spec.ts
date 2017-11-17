import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDistributionComponent } from './age-distribution.component';

describe('MainPageComponent', () => {
  let component: AgeDistributionComponent;
  let fixture: ComponentFixture<AgeDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
