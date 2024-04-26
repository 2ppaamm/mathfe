import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminHouseTracksListComponent } from './admin-house-tracks-list.component';

describe('AdminHouseTracksListComponent', () => {
  let component: AdminHouseTracksListComponent;
  let fixture: ComponentFixture<AdminHouseTracksListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHouseTracksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHouseTracksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
