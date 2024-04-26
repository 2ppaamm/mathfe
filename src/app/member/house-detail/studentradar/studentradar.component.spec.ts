import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentradarComponent } from './studentradar.component';

describe('StudentradarComponent', () => {
  let component: StudentradarComponent;
  let fixture: ComponentFixture<StudentradarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentradarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentradarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
