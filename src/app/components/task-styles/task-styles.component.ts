


import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../../models/task.model";



@Component({
  selector: 'app-simpletask',
  templateUrl: './task-styles.component.html',
  styleUrls: ['./task-styles.component.css']
})
export class TaskStylesComponent {
  @Input()
  task ?: any


  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();
  onPin(id:any) {
    this.onPinTask.emit(id);
    }

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();
    
  
  onArchive(id:any) {
    this.onArchiveTask.emit(id);
    }
}

