import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadLayoutComponent } from './head-layout.component';

describe('HeadLayoutComponent', () => {
  let component: HeadLayoutComponent;
  let fixture: ComponentFixture<HeadLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
