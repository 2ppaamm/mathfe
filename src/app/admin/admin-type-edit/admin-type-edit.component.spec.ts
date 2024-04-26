import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminTypeEditComponent } from './admin-type-edit.component';

describe('AdminTypeEditComponent', () => {
  let component: AdminTypeEditComponent;
  let fixture: ComponentFixture<AdminTypeEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
