import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeachListComponent } from './teach-list.component';

describe('TeachListComponent', () => {
  let component: TeachListComponent;
  let fixture: ComponentFixture<TeachListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
