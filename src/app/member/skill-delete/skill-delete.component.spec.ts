import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkillDeleteComponent } from './skill-delete.component';

describe('SkillDeleteComponent', () => {
  let component: SkillDeleteComponent;
  let fixture: ComponentFixture<SkillDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
