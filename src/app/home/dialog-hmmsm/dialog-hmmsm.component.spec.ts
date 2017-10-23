import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHmmsmComponent } from './dialog-hmmsm.component';

describe('DialogHmmsmComponent', () => {
  let component: DialogHmmsmComponent;
  let fixture: ComponentFixture<DialogHmmsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogHmmsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHmmsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
