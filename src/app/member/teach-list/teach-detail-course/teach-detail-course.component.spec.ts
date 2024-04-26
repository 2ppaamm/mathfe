import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeachDetailCourseComponent } from './teach-detail-course.component';

describe('TeachDetailCourseComponent', () => {
  let component: TeachDetailCourseComponent;
  let fixture: ComponentFixture<TeachDetailCourseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachDetailCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachDetailCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
