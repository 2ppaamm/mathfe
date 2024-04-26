import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminEnrollmentUserDetailModalComponent } from './admin-enrollment-user-detail-modal.component';

describe('AdminEnrollmentUserDetailModalComponent', () => {
  let component: AdminEnrollmentUserDetailModalComponent;
  let fixture: ComponentFixture<AdminEnrollmentUserDetailModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEnrollmentUserDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEnrollmentUserDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
