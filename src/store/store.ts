import { configureStore } from '@reduxjs/toolkit';

import { updateTodosSlice } from './updateTodosSlice';

const store = configureStore({
  reducer: {
    one: updateTodosSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
