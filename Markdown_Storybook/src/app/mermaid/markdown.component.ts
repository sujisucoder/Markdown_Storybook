import { Component } from '@angular/core';

@Component({
  selector: 'app-markdown',
  template: `
    <markdown class="variable-binding" [data]="markdown"></markdown>
  `,
  styleUrls: []
})
export class MarkdownComponent {
  title = 'Markdownstorybook';

  markdown = `## Markdown __rulez__!
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

