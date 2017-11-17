import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SexDistributionComponent } from './sex-distribution.component';

describe('MainPageComponent', () => {
  let component: SexDistributionComponent;
  let fixture: ComponentFixture<SexDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SexDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
