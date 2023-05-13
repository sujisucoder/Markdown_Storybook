import { Component } from '@angular/core';

@Component({
  selector: 'app-markdown-simpleTask',
  template: `
  <markdown class="variable-binding" [data]="markdown"></markdown>
  `,

})
export class MarkdownSimpleTaskComponent {
  title = 'Markdownstorybook';

  markdown = `## simple task


  ---
  

  
###  Task List Stories

     - Default
     - Pinned  
     - Empty
     - Loading 
  
 
  > `;
  }
