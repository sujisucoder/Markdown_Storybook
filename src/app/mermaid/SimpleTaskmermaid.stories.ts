
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { MermaidSimpleTaskComponent } from './SimpleTaskmermaid.component';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

const metaDetail: Meta<MermaidSimpleTaskComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Private/Markdown',
  component: MermaidSimpleTaskComponent,
  decorators:[
    moduleMetadata({
        //👇 Imports both components to allow component composition with storybook
        declarations: [MermaidSimpleTaskComponent],
        imports: [            
            CommonModule,
            HttpClientModule,
            MarkdownModule.forRoot({ loader: HttpClient }),
        ]
      }),
  componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`)
  ]
};

export default metaDetail;
type StoryDetail = StoryObj<MermaidSimpleTaskComponent>;


const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};


export const PrivateMermaidSTask: StoryDetail = {
  render: () => ({
    props: {
      task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
      },
      onPinTask: actionsData.onPinTask,
      onArchiveTask: actionsData.onArchiveTask,
    },
  }),
};