import { Component } from '@angular/core';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent {
  title = 'Markdownstorybook';

  markdown = `## Add task.ts
  ---
  
  ### src/app/models/task.model.ts
  \`\`\`typescript

  export interface Task {
    id: string;
    title: string;
    state: string;
  }
  \`\`\`

  
  
  

  > `
  
  }

