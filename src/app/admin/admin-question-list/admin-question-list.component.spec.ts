import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminQuestionListComponent } from './admin-question-list.component';

describe('AdminQuestionListComponent', () => {
  let component: AdminQuestionListComponent;
  let fixture: ComponentFixture<AdminQuestionListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
