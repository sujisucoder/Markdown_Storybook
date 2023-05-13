import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { MarkdownModule } from 'ngx-markdown';
import { MermaidComponent } from './mermaid/mermaid.component';
import { MarkdownSimpleTaskComponent } from './markdown/SimpleTaskmarkdown.component'



import { TaskComponent } from './simpletask/task.component';
import { TaskStylesComponent } from './task-styles/task-styles.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PureTaskListComponent } from './pure-task-list/pure-task-list.component';
import { MermaidTasklistComponent } from '././mermaid/TaskListmermaid.component'
import { MermaidSimpleTaskComponent } from '././mermaid/SimpleTaskmermaid.component'




@NgModule({
  declarations: [
    AppComponent,
    MarkdownComponent,
    MermaidComponent,
    TaskComponent,
    TaskStylesComponent,
    TaskListComponent,
    PureTaskListComponent,
    MermaidTasklistComponent,

    MarkdownSimpleTaskComponent,
    MermaidSimpleTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
