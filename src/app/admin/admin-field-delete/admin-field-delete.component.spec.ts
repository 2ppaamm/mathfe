import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminFieldDeleteComponent } from './admin-field-delete.component';

describe('AdminFieldDeleteComponent', () => {
  let component: AdminFieldDeleteComponent;
  let fixture: ComponentFixture<AdminFieldDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFieldDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFieldDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
