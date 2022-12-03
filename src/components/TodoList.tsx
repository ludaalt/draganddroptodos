import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Todo, Status } from '../types/types';
import { RootState } from '../store/store';
import TodoItem from './TodoItem';

import { updateTodoAction } from '../store/updateTodosReducer';

interface Props {
  status: Status;
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
  filteredTodos?: Todo[] | undefined;
  isFiltering: boolean;
}

const TodoList: React.FC<Props> = ({
  status,
  isDragging,
  handleDragging,
  filteredTodos,
  isFiltering,
}) => {
  const dispatch = useDispatch();
  const todos = isFiltering ? filteredTodos : useSelector((state: RootState) => state.todos.todos);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const id = +e.dataTransfer.getData('text');
    dispatch(updateTodoAction({ id, status }));
    handleDragging(false);
  };

  return (
    <div
      className={`todos ${isDragging ? 'todos-dragging' : ''}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <header>{status} tasks</header>
      {todos?.map(
        (todo: Todo) =>
          status === todo.status && (
            <Link key={todo.id} to={`/todos/${todo.id}`}>
              <TodoItem todo={todo} handleDragging={handleDragging} />
            </Link>
          ),
      )}
    </div>
  );
};

export default TodoList;
