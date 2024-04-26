import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminHouseSkillsTrackListComponent } from './admin-house-skills-track-list.component';

describe('AdminHouseSkillsTrackListComponent', () => {
  let component: AdminHouseSkillsTrackListComponent;
  let fixture: ComponentFixture<AdminHouseSkillsTrackListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHouseSkillsTrackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHouseSkillsTrackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
