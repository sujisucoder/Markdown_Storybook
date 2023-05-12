
import { componentWrapperDecorator, moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { PureTaskListComponent } from './pure-task-list.component';
import { TaskStylesComponent } from '../task-styles/task-styles.component';

import * as TaskStylesStories from '../task-styles/task-styles.stories';
import { Task } from 'src/app/models/task.model';

const meta: Meta<PureTaskListComponent> = {

  title: 'TaskBox/PureTaskList',
  component: PureTaskListComponent,

  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with storybook
      declarations: [PureTaskListComponent, TaskStylesComponent],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],

};

export default meta;

type Story = StoryObj<PureTaskListComponent>;





export const Template: Story = {
  args: {
      onPinTask: TaskStylesStories.DefaultTask.args?.onPinTask,
      onArchiveTask: TaskStylesStories.DefaultTask.args?.onArchiveTask,
    }
}


export const Default = {
  
  args:{
  tasks: [
    { ...TaskStylesStories.DefaultTask.args?.['task'], id: '1', title: 'Task 1' },
    { ...TaskStylesStories.DefaultTask.args?.['task'], id: '2', title: 'Task 2' },
    { ...TaskStylesStories.DefaultTask.args?.['task'], id: '3', title: 'Task 3' },
    { ...TaskStylesStories.DefaultTask.args?.['task'], id: '4', title: 'Task 4' },
    { ...TaskStylesStories.DefaultTask.args?.['task'], id: '5', title: 'Task 5' },
    { ...TaskStylesStories.DefaultTask.args?.['task'], id: '6', title: 'Task 6' },
  ],
}
};




export const WithPinnedTasks: Story = {

  args:{
      tasks: [
          ...(Default.args?.['tasks'] as Task[] ).slice(0, 5),
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

function action(arg0: string) {
  throw new Error('Function not implemented.');
}
