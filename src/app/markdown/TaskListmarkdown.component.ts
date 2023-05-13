import { Component } from '@angular/core';

@Component({
  selector: 'app-markdown-taskList',
  templateUrl: './markdown.component.html',

})
export class MarkdownTaskListComponent {
  title = 'Markdownstorybook';

  markdown = `## 

  ---
  

  
###  Task List States

     - Default
     - Pinned  
     - Empty
     - Loading 
  
 
  > `;
  }

