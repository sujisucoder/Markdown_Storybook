import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { MarkdownModule } from 'ngx-markdown';
import { MermaidComponent } from './mermaid/mermaid.component';

import { TaskComponent } from './task/task.component';
import { TaskStylesComponent } from './task-styles/task-styles.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListStyleComponent } from './task-list-styles/task-list-styles.component';
import { MermaidTasklistComponent } from '././mermaid/TaskListmermaid.component'



@NgModule({
  declarations: [
    AppComponent,
    MarkdownComponent,
    MermaidComponent,
    TaskComponent,
    TaskStylesComponent,
    TaskListComponent,
    TaskListStyleComponent,
    MermaidTasklistComponent
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
