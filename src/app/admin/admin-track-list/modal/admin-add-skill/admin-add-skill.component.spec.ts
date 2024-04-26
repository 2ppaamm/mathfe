import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminAddSkillComponent } from './admin-add-skill.component';

describe('AdminAddSkillComponent', () => {
  let component: AdminAddSkillComponent;
  let fixture: ComponentFixture<AdminAddSkillComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
