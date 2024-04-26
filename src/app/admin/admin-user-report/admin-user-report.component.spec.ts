import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminUserReportComponent } from './admin-user-report.component';

describe('AdminUserReportComponent', () => {
  let component: AdminUserReportComponent;
  let fixture: ComponentFixture<AdminUserReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
