import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminSkillCreateComponent } from './admin-skill-create.component';

describe('AdminSkillCreateComponent', () => {
  let component: AdminSkillCreateComponent;
  let fixture: ComponentFixture<AdminSkillCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSkillCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSkillCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
