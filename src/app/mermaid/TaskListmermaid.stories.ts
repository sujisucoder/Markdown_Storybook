
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { MermaidTasklistComponent } from './TaskListmermaid.component';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { applicationConfig } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';

const metaDetail: Meta<MermaidTasklistComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Private/Mermaid',
  component: MermaidTasklistComponent,
  decorators:[
    moduleMetadata({
        //👇 Imports both components to allow component composition with storybook
        declarations: [MermaidTasklistComponent],
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
type StoryDetail = StoryObj<MermaidTasklistComponent>;


const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};


export const PrivateMermaidTlist: StoryDetail = {
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