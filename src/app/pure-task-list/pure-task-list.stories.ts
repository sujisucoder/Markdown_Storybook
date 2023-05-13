
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular/';

import { CommonModule } from '@angular/common';

import { PureTaskListComponent } from './pure-task-list.component';
import { TaskStylesComponent } from '../task-styles/task-styles.component';
import { action } from '@storybook/addon-actions';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';


import * as TaskStylesStories from '../task-styles/task-styles.stories';
import { Task } from '../models/task.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const meta: Meta<PureTaskListComponent> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'TaskBox/PureTaskListComponent',
    component: PureTaskListComponent,
    
    decorators: [
        moduleMetadata({
            //👇 Imports both components to allow component composition with Storybook
            declarations: [PureTaskListComponent, TaskStylesComponent],
            imports: [
              HttpClientModule,
              MarkdownModule.forRoot({ loader: HttpClient }),
              CommonModule],
        }),
        //👇 Wraps our stories with a decorator
        // componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
        componentWrapperDecorator(
            (story) => `<div style="margin: 3em">${story}</div>`
          ),
    ],
};

export default meta;
type Story = StoryObj<PureTaskListComponent>;

const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};


export const Template: Story = {
    args: {
        onPinTask: TaskStylesStories.DefaultTask.args?.onPinTask,
        onArchiveTask: TaskStylesStories.DefaultTask.args?.onArchiveTask,
      }
}

export const DefaultList: Story = {
    args: {
        tasks: [
          {
            ...(TaskStylesStories.DefaultTask.args?.['task'] as Task),
            id: '1',
            title: 'Task 1',
          },
          {
            ...(TaskStylesStories.DefaultTask.args?.['task'] as Task),
            id: '2',
            title: 'Task 2',
          },
          {
            ...(TaskStylesStories.DefaultTask.args?.['task'] as Task),
            id: '3',
            title: 'Task 3',
          },
          {
            ...(TaskStylesStories.DefaultTask.args?.['task'] as Task),
            id: '4',
            title: 'Task 4',
          },
          {
            ...(TaskStylesStories.DefaultTask.args?.['task'] as Task),
            id: '5',
            title: 'Task 5',
          },
          {
            ...(TaskStylesStories.DefaultTask.args?.['task'] as Task),
            id: '6',
            title: 'Task 6',
          },
        ],
      },
};

  
export const WithPinnedTasks: Story = {

args:{
    tasks: [
        ...(DefaultList.args?.['tasks'] as Task[] ).slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],

}
}

export const Loading: Story ={
    args : {
        tasks: [],
        loading: true,
    }

}

export const Empty: Story = {
   args : {
        // Shaping the stories through args composition.
        // Inherited data coming from the Loading story.
        // ...Loading.args,
        ...Loading.args,
        loading: false,
    }
    

}
