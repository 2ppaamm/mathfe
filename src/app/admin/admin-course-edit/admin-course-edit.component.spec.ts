import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminCourseEditComponent } from './admin-course-edit.component';

describe('AdminCourseEditComponent', () => {
  let component: AdminCourseEditComponent;
  let fixture: ComponentFixture<AdminCourseEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCourseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCourseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
