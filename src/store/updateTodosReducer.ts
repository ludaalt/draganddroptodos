import { ActionType, Action } from '../types/action';

import { StateType, Todo, Status } from '../types/types';
import { data } from '../data';
import { getCurrentDate } from '../services/getCurrentDate';

const defaultState: StateType = {
  todos: data as Todo[] | undefined,
};

export const updateTodosReducer = (state = defaultState, action: Action): StateType => {
  switch (action.type) {
    case ActionType.ADD_TODO: {
      const newState = { ...state };

      if (action.payload) {
        const newItem = action.payload;
        newItem.status = 'Queue';
        newItem.createdAt = getCurrentDate();
        newItem.workingHours = 0;
        newState?.todos?.push(newItem);
      }

      return { ...newState };
    }

    case ActionType.DELETE_TODO: {
      const newState = { ...state };
      newState.todos = newState?.todos?.filter((item: Todo) => item.id !== action.payload);

      return { ...newState };
    }

    case ActionType.UPDATE_TODO_STATUS: {
      const newState = { ...state };
      (newState?.todos?.find((item: Todo) => item.id === action.payload.id))!.status =
        action.payload.status;

      return { ...newState };
    }

    case ActionType.UPDATE_TODO_ITEM: {
      const newState = { ...state };

      if (action.payload && newState.todos) {
        const itemToReplace = newState.todos.find((item: Todo) => item.id === action.payload.id);
        const index = itemToReplace && newState.todos.indexOf(itemToReplace);

        if (index && index !== -1) {
          newState.todos[index] = action.payload;
        }
      }

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

export function updateTodoStatusAction(payload: { id: number; status: Status }): Action {
  return { type: ActionType.UPDATE_TODO_STATUS, payload };
}

export function updateTodoItemAction(payload: Todo): Action {
  return { type: ActionType.UPDATE_TODO_ITEM, payload };
}
