import { Component } from '@angular/core';

@Component({
  selector: 'app-markdown-taskList',
  templateUrl: './markdown.component.html',

})
export class MarkdownTaskListComponent {
  title = 'Markdownstorybook';

  markdown = `## TAsk list mdx!
  ---
  
  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescript';
  \`\`\`
  
  ### Lists
  1. Ordered list
  2. Another bullet point
     - Unordered list
     - Another unordered bullet
  
  ### Blockquote
  > Blockquote to the max`;
  }

