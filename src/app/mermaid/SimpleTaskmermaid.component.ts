import { Component } from '@angular/core';

@Component({
  selector: 'app-mermaid',
  template: `


<markdown mermaid  ngPreserveWhitespaces>
  <pre class="mermaid">
    flowchart TD
    id1([Create a task.component.ts ])-->id2([Create a task.stories.ts])
    id2-->id3([Make 3 Stories ])
    id3-->id4[[1.Default]]
    id3-->id5[[2.Pinned]]
    id3-->id6[[3.Archived]]
   
  </pre>
  </markdown>
   

  
  `,

})
export class MermaidSimpleTaskComponent {

}