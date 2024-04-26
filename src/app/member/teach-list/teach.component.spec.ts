import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeachComponent } from './teach.component';

describe('TeachComponent', () => {
  let component: TeachComponent;
  let fixture: ComponentFixture<TeachComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
