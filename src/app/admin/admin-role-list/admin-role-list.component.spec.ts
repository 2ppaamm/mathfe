import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminRoleListComponent } from './admin-role-list.component';

describe('AdminRoleListComponent', () => {
  let component: AdminRoleListComponent;
  let fixture: ComponentFixture<AdminRoleListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRoleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
