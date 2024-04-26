import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentManagementComponent } from './student-management.component';

describe('StudentManagementComponent', () => {
  let component: StudentManagementComponent;
  let fixture: ComponentFixture<StudentManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
