import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminPermissionListComponent } from './admin-permission-list.component';

describe('AdminPermissionListComponent', () => {
  let component: AdminPermissionListComponent;
  let fixture: ComponentFixture<AdminPermissionListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPermissionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPermissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
