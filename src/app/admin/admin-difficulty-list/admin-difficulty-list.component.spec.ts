import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminDifficultyListComponent } from './admin-difficulty-list.component';

describe('AdminDifficultyListComponent', () => {
  let component: AdminDifficultyListComponent;
  let fixture: ComponentFixture<AdminDifficultyListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDifficultyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDifficultyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
