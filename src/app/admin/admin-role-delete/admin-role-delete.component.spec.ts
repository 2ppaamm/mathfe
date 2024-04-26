import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminRoleDeleteComponent } from './admin-role-delete.component';

describe('AdminRoleDeleteComponent', () => {
  let component: AdminRoleDeleteComponent;
  let fixture: ComponentFixture<AdminRoleDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRoleDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRoleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
