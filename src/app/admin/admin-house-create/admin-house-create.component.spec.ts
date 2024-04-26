import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminHouseCreateComponent } from './admin-house-create.component';

describe('AdminHouseCreateComponent', () => {
  let component: AdminHouseCreateComponent;
  let fixture: ComponentFixture<AdminHouseCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHouseCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHouseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
