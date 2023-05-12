
// import { Component, Input, Output, EventEmitter } from '@angular/core';

// import { Task } from '../models/task.model';

// @Component({
//   selector: 'app-task-list',
//   templateUrl:'./task-list.component.html' ,
// })
// export class TaskListComponent {
//   /** The list of tasks */
//   @Input() tasks: Task[] = [];

//   /** Checks if it's in loading state */
//   @Input() loading = false;

//   /** Event to change the task to pinned */
//   // tslint:disable-next-line: no-output-on-prefix
//   @Output()
//   onPinTask = new EventEmitter<Event>();

//   /** Event to change the task to archived */
//   // tslint:disable-next-line: no-output-on-prefix
//   @Output()
//   onArchiveTask = new EventEmitter<Event>();
// }


import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
 templateUrl: './task-list.component.html',
})
export class TaskListComponent {

  /**
  * @ignore
  * Component property to define ordering of tasks
  */
 tasksInOrder: Task[] = [
  {
    id: 'd',
    title: 'Task1',
    state: 'h'
  },
  {
    id: 'd',
    title: 'Task2',
    state: 'h'
  },
  {
    id: 'd',
    title: 'Task3',
    state: 'h'
  },
  {
    id: 'd',
    title: 'Task4',
    state: 'h'
  }
]
 

 @Input() loading = false;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

 @Input()
 set tasks(arr: Task[]) {
   const initialTasks = [
     ...arr.filter(t => t.state === 'TASK_PINNED'),
     ...arr.filter(t => t.state !== 'TASK_PINNED'),
   ];
   const filteredTasks = initialTasks.filter(
     t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
   );
   this.tasksInOrder = filteredTasks.filter(
     t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
   );
 }
}