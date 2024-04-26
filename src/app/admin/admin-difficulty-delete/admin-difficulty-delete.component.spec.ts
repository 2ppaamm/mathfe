import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminDifficultyDeleteComponent } from './admin-difficulty-delete.component';

describe('AdminDifficultyDeleteComponent', () => {
  let component: AdminDifficultyDeleteComponent;
  let fixture: ComponentFixture<AdminDifficultyDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDifficultyDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDifficultyDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
