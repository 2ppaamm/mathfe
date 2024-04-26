import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminCourseDeleteComponent } from './admin-course-delete.component';

describe('AdminCourseDeleteComponent', () => {
  let component: AdminCourseDeleteComponent;
  let fixture: ComponentFixture<AdminCourseDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
