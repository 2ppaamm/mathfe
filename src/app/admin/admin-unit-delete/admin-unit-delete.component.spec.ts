import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminUnitDeleteComponent } from './admin-unit-delete.component';

describe('AdminUnitDeleteComponent', () => {
  let component: AdminUnitDeleteComponent;
  let fixture: ComponentFixture<AdminUnitDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUnitDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUnitDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
