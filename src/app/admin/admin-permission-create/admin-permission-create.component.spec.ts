import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminPermissionCreateComponent } from './admin-permission-create.component';

describe('AdminPermissionCreateComponent', () => {
  let component: AdminPermissionCreateComponent;
  let fixture: ComponentFixture<AdminPermissionCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPermissionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPermissionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
