import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Todo, Status } from '../types/types';
import { RootState } from '../store/store';
import TodoItem from './TodoItem';
import { updateTodo } from '../store/updateTodosSlice';

interface Props {
  status: Status;
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
}

const TodoList: React.FC<Props> = ({ status, isDragging, handleDragging }) => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const id = +e.dataTransfer.getData('text');
    dispatch(updateTodo({ id, status }));
    handleDragging(false);
  };

  return (
    <div className='todos' onDragOver={handleDragOver} onDrop={handleDrop}>
      <header>{status} tasks</header>
      {todos?.map(
        (todo: Todo) =>
          status === todo.status && <TodoItem key={todo.id} todo={todo} handleDragging={handleDragging} />,
      )}
    </div>
  );
};

export default TodoList;
