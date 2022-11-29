import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Todo } from '../types/types';

export const updateTodosSlice = createSlice({
  name: 'updateTodos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      if (Array.isArray(state)) state.push(action.payload);
    },

    deleteTodo: (state, action) => {
      if (Array.isArray(state)) state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = updateTodosSlice.actions;

export default updateTodosSlice.reducer;
