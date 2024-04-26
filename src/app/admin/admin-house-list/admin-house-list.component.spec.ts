import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminHouseListComponent } from './admin-house-list.component';

describe('AdminHouseListComponent', () => {
  let component: AdminHouseListComponent;
  let fixture: ComponentFixture<AdminHouseListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHouseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
