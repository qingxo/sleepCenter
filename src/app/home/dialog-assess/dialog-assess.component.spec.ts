import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAssessComponent } from './dialog-assess.component';

describe('DialogAssessComponent', () => {
  let component: DialogAssessComponent;
  let fixture: ComponentFixture<DialogAssessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAssessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAssessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
