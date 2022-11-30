import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Todo } from '../types/types';
import { data } from '../data';

export const updateTodosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: data,
  },
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.filter((item) => item.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const todo = state.todos.find((item) => item.id === action.payload.id);

      if (todo && todo.status !== action.payload.status) {
        todo.status = action.payload.status;
        state.todos = [todo, ...state.todos.filter((item) => item.id !== action.payload.id)];
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = updateTodosSlice.actions;

export default updateTodosSlice.reducer;
