import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminUnitEditComponent } from './admin-unit-edit.component';

describe('AdminUnitEditComponent', () => {
  let component: AdminUnitEditComponent;
  let fixture: ComponentFixture<AdminUnitEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUnitEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUnitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
