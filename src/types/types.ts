export interface StateType {
  todos?: Todo[];
}

export type Status = 'Queue' | 'Development' | 'Done';

export interface Todo {
  id: number;
  title: string;
  description: string;
  createdAt?: string;
  workingHours?: number;
  doneAt?: any;
  priority?: string;

  status?: Status;
  files?: any[];
}

export interface TitleProps {
  page: string;
  todo?: Todo;
  modalStateChanger: (b: boolean) => void;
}

export interface TodoItemProps {
  todo: Todo;
  handleDragging?: (b: boolean) => void;
}
