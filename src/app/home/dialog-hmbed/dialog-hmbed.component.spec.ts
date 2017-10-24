import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHmbedComponent } from './dialog-hmbed.component';

describe('DialogHmbedComponent', () => {
  let component: DialogHmbedComponent;
  let fixture: ComponentFixture<DialogHmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogHmbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
