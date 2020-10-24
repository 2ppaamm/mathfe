import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddHouseComponent } from './admin-add-house.component';

describe('AdminAddHouseComponent', () => {
  let component: AdminAddHouseComponent;
  let fixture: ComponentFixture<AdminAddHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
