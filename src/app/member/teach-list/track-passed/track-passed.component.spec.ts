import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrackPassedComponent } from './track-passed.component';

describe('TrackPassedComponent', () => {
  let component: TrackPassedComponent;
  let fixture: ComponentFixture<TrackPassedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackPassedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackPassedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
