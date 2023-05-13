import { Component } from '@angular/core';

@Component({
  selector: 'app-mermaid-taskList',
  template: `
    <markdown mermaid  ngPreserveWhitespaces>
  <pre class="mermaid">
    flowchart TD
    id1([Create a tasklist.Component.ts file ])--> id2([Create a  tasklist.Stories.ts file])
    id2-->id3([Create 4 Stories])
    id3-->id4[[1.Default]]
    id3-->id5[[2.Pinned ]]
    id3-->id6[[3.Empty]]
    id3-->id7[[4.Loading]]
    id3-->id8([create an Empty array named task])
    id8-->id9([Create a boolean varriable loading and set it false. ])
    id9-->id10([change the  task array values to see different stories ])
   
    
    
  </pre>
  </markdown>
  `,

})
export class MermaidTasklistComponent {

}
