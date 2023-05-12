import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStylesComponent } from './task-styles.component';

describe('TaskStylesComponent', () => {
  let component: TaskStylesComponent;
  let fixture: ComponentFixture<TaskStylesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskStylesComponent]
    });
    fixture = TestBed.createComponent(TaskStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
