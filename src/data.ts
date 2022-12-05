import { Todo } from './types/types';

export const data: Todo[] = [
  {
    id: 1,
    title: 'Create todo main page',
    description:
      'Implement a main app page that should contain three columns with the ability to change the status using drag-n-drop',
    createdAt: '26-11-2022',
    workingHours: 0,
    doneAt: '04-12-2022',
    priority: 'high',
    status: 'Queue',
  },

  {
    id: 2,
    title: 'Create todo item page',
    description: 'Implement a task page that should contain description every todo task',
    createdAt: '26-11-2022',
    workingHours: 0,
    doneAt: '04-12-2022',
    priority: 'high',

    status: 'Queue',
  },
];
