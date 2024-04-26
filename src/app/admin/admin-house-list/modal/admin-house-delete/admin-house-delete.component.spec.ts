import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminHouseDeleteComponent } from './admin-house-delete.component';

describe('AdminHouseDeleteComponent', () => {
  let component: AdminHouseDeleteComponent;
  let fixture: ComponentFixture<AdminHouseDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHouseDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHouseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
