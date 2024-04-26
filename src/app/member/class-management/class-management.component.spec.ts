import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassManagementComponent } from './class-management.component';

describe('ClassManagementComponent', () => {
  let component: ClassManagementComponent;
  let fixture: ComponentFixture<ClassManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
