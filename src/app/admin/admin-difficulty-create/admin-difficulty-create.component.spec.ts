import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminDifficultyCreateComponent } from './admin-difficulty-create.component';

describe('AdminDifficultyCreateComponent', () => {
  let component: AdminDifficultyCreateComponent;
  let fixture: ComponentFixture<AdminDifficultyCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDifficultyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDifficultyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
