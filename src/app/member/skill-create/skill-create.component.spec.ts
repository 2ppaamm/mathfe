import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkillCreateComponent } from './skill-create.component';

describe('SkillCreateComponent', () => {
  let component: SkillCreateComponent;
  let fixture: ComponentFixture<SkillCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
