import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { MarkdownModule } from 'ngx-markdown';
import { MermaidComponent } from './mermaid/mermaid.component';
import { MermaidTasklistComponent } from './mermaid/TaskListmermaid.component'


 import { TaskModule } from './components/task.module';
 import { NgxsModule } from '@ngxs/store';
 import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
 import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

 import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    MarkdownComponent,
    MermaidComponent,
    MermaidTasklistComponent
    
    
  ],
  imports: [
    TaskModule,
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
        NgxsModule.forRoot([], {
           developmentMode: !environment.production,
         }),
         NgxsReduxDevtoolsPluginModule.forRoot(),
         NgxsLoggerPluginModule.forRoot({
           disabled: environment.production,
         }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
