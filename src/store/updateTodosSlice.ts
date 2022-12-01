import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Todo } from '../types/types';
import { data } from '../data';

export const updateTodosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: data,
    isCreatingTodo: false,
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

    createTodo: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload);
      state.isCreatingTodo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, createTodo } = updateTodosSlice.actions;

export default updateTodosSlice.reducer;
