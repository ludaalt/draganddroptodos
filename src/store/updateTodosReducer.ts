import { ActionType, Action } from '../types/action';

import { StateType, Todo, Status } from '../types/types';
import { data } from '../data';

const defaultState: StateType = {
  todos: data as Todo[] | undefined,
};

export const updateTodosReducer = (state = defaultState, action: Action): StateType => {
  switch (action.type) {
    case ActionType.ADD_TODO: {
      const newState = { ...state };

      if (action.payload) {
        newState?.todos?.push(action.payload);
      }

      return { ...newState };
    }

    case ActionType.DELETE_TODO: {
      const newState = { ...state };
      newState.todos = newState?.todos?.filter((item: Todo) => item.id !== action.payload);

      return { ...newState };
    }

    case ActionType.UPDATE_TODO: {
      const newState = { ...state };
      (newState?.todos?.find((item: Todo) => item.id === action.payload.id))!.status =
        action.payload.status;

      return { ...newState };
    }

    default:
      return state;
  }
};

export function addTodoAction(payload: Todo): Action {
  return { type: ActionType.ADD_TODO, payload };
}

export function deleteTodoAction(payload: number): Action {
  return { type: ActionType.DELETE_TODO, payload };
}

export function updateTodoAction(payload: { id: number; status: Status }): Action {
  return { type: ActionType.UPDATE_TODO, payload };
}