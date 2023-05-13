import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simpletask',
  templateUrl: './task.component.html',
  
})
export class TaskComponent {
  @Input()
  task?: any = { title: 'sojem', state: '', id: '' };

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();
}