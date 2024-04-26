import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminFieldListComponent } from './admin-field-list.component';

describe('AdminFieldListComponent', () => {
  let component: AdminFieldListComponent;
  let fixture: ComponentFixture<AdminFieldListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFieldListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFieldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
