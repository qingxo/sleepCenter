import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConditionComponent } from './dialog-condition.component';

describe('DialogConditionComponent', () => {
  let component: DialogConditionComponent;
  let fixture: ComponentFixture<DialogConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
