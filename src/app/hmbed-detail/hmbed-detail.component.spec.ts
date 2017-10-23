import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmbedDetailComponent } from './hmbed-detail.component';

describe('HmbedDetailComponent', () => {
  let component: HmbedDetailComponent;
  let fixture: ComponentFixture<HmbedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmbedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmbedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
