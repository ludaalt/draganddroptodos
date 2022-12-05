import { Todo, Status } from './types';

export enum ActionType {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  UPDATE_TODO_STATUS = 'UPDATE_TODO_STATUS',
  UPDATE_TODO_ITEM = 'UPDATE_TODO_ITEM',
}

export interface addTodoActionType {
  type: ActionType.ADD_TODO;
  payload: Todo;
}

interface deleteTodoAction {
  type: ActionType.DELETE_TODO;
  payload: number;
}

interface updateTodoStatusAction {
  type: ActionType.UPDATE_TODO_STATUS;
  payload: {
    id: number;
    status: Status;
  };
}

interface updateTodoItemAction {
  type: ActionType.UPDATE_TODO_ITEM;
  payload: Todo;
}

export type Action =
  | addTodoActionType
  | deleteTodoAction
  | updateTodoStatusAction
  | updateTodoItemAction;
