import { Component } from '@angular/core';

@Component({
  selector: 'app-mermaid-taskList',
  template: `
    <markdown mermaid  ngPreserveWhitespaces>
  <pre class="mermaid">
    flowchart TD
    id1([Create a Component.ts file ])--> id2([Create a Stories.ts file])
    id2-->id3([Create 4 Stories])
   
    
    id4([Markdown loaded from src])
  </pre>
  </markdown>
  `,

})
export class MermaidTasklistComponent {

}
