import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminCourseListComponent } from './admin-course-list.component';

describe('AdminCourseListComponent', () => {
  let component: AdminCourseListComponent;
  let fixture: ComponentFixture<AdminCourseListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
