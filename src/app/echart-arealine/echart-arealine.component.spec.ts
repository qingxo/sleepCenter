import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartArealineComponent } from './echart-arealine.component';

describe('EchartArealineComponent', () => {
  let component: EchartArealineComponent;
  let fixture: ComponentFixture<EchartArealineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartArealineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartArealineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
