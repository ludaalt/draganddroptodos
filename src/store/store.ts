import { createStore, combineReducers } from 'redux';
import { updateTodosReducer } from './updateTodosReducer';

function saveToLocalStorage(state: RootState): void {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('persistantState', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage(): any {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const rootReducer = combineReducers({
  todos: updateTodosReducer,
});

const store = createStore(rootReducer);

// const store = createStore(rootReducer, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;

export default store;
