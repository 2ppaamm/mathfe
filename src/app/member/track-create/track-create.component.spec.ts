import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrackCreateComponent } from './track-create.component';

describe('TrackCreateComponent', () => {
  let component: TrackCreateComponent;
  let fixture: ComponentFixture<TrackCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
