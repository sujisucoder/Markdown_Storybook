import { Component } from '@angular/core';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',

})
export class MarkdownComponent {
  title = 'Markdownstorybook';

  markdown = `
  ---
  
  ### Create a new directory to add the file task.model.ts
  src/app/models/task.model.ts

  \`\`\`typescript
  
export interface Task {
  id: string;
  title: string;
  state: string;
}
  \`\`\`
  
 `;
  }

