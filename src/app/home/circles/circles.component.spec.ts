import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirlesComponent } from './cirles.component';

describe('CirlesComponent', () => {
  let component: CirlesComponent;
  let fixture: ComponentFixture<CirlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
