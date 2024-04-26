import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminLevelListComponent } from './admin-level-list.component';

describe('AdminLevelListComponent', () => {
  let component: AdminLevelListComponent;
  let fixture: ComponentFixture<AdminLevelListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLevelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLevelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
