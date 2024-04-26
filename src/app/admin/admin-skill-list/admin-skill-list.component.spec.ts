import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminSkillListComponent } from './admin-skill-list.component';

describe('AdminSkillListComponent', () => {
  let component: AdminSkillListComponent;
  let fixture: ComponentFixture<AdminSkillListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSkillListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSkillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
