import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeachDetailStudentComponent } from './teach-detail-student.component';

describe('TeachDetailStudentComponent', () => {
  let component: TeachDetailStudentComponent;
  let fixture: ComponentFixture<TeachDetailStudentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachDetailStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachDetailStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
