import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminTypeCreateComponent } from './admin-type-create.component';

describe('AdminTypeCreateComponent', () => {
  let component: AdminTypeCreateComponent;
  let fixture: ComponentFixture<AdminTypeCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
