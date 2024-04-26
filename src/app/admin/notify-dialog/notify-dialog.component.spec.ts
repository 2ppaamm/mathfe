import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotifyDialogComponent } from './notify-dialog.component';

describe('NotifyDialogComponent', () => {
  let component: NotifyDialogComponent;
  let fixture: ComponentFixture<NotifyDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
