

import type { Meta, StoryObj } from '@storybook/angular/';

import { TaskStylesComponent } from './task-styles.component';
import { action } from '@storybook/addon-actions';

const meta: Meta<TaskStylesComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'TaskStylesComponent',
  component: TaskStylesComponent,

};

export default meta;
type Story = StoryObj<TaskStylesComponent>;

const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};


export const DefaultTask: Story = {

  args:{
    task:{
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    }
  }
  // render: () => ({
  //   props: {
  //     task: {
  //       id: '1',
  //       title: 'Test Task',
  //       state: 'TASK_INBOX',
  //     },
  //     onPinTask: actionsData.onPinTask,
  //     onArchiveTask: actionsData.onArchiveTask,
  //   },
  // }),
};

export const Pinned: Story = {
  render: () => ({
    props: {
      task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_PINNED',
      },
      onPinTask: actionsData.onPinTask,
      onArchiveTask: actionsData.onArchiveTask,
    },
  }),
};

export const Archived: Story = {
  render: () => ({
    props: {
      task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_ARCHIVED',
      },
      onPinTask: actionsData.onPinTask,
      onArchiveTask: actionsData.onArchiveTask,
    },
  }),
};