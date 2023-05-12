
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskStylesComponent } from './task-styles/task-styles.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksState } from '../state/task.state';
import { PureTaskListComponent } from './task-list/pure-task-list.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskStylesComponent, TaskListComponent,PureTaskListComponent],
  declarations: [TaskStylesComponent, TaskListComponent, PureTaskListComponent],
  providers: [],
})
export class TaskModule {}