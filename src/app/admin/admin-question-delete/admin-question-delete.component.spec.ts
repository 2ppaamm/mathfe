import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminQuestionDeleteComponent } from './admin-question-delete.component';

describe('AdminQuestionDeleteComponent', () => {
  let component: AdminQuestionDeleteComponent;
  let fixture: ComponentFixture<AdminQuestionDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuestionDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuestionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
