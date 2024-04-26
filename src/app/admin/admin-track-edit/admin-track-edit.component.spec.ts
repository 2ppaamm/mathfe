import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminTrackEditComponent } from './admin-track-edit.component';

describe('AdminTrackEditComponent', () => {
  let component: AdminTrackEditComponent;
  let fixture: ComponentFixture<AdminTrackEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTrackEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTrackEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
