import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarLineComponent } from './bar-line.component';

describe('BarLineComponent', () => {
  let component: BarLineComponent;
  let fixture: ComponentFixture<BarLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
