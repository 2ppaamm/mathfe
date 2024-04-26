import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminQuestionCreateComponent } from './admin-question-create.component';

describe('AdminQuestionCreateComponent', () => {
  let component: AdminQuestionCreateComponent;
  let fixture: ComponentFixture<AdminQuestionCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuestionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuestionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
