import React, { useMemo } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { RootState } from '../store/store';
import { Todo } from '../types/types';

import TodoItem from '../components/TodoItem';

const TodoItemPage: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const { id } = useParams();

  const todoItem = useMemo(() => todos?.find((item: Todo) => item.id === Number(id)), [todos, id]);

  if (todoItem) return <TodoItem todo={todoItem} />;
  return null;
};

export default TodoItemPage;
