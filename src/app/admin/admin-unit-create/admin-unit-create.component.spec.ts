import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminUnitCreateComponent } from './admin-unit-create.component';

describe('AdminUnitCreateComponent', () => {
  let component: AdminUnitCreateComponent;
  let fixture: ComponentFixture<AdminUnitCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUnitCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUnitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
