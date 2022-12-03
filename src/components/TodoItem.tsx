import React from 'react';
import { useDispatch } from 'react-redux';

import { TodoItemProps } from '../types/types';
import { deleteTodoAction } from '../store/updateTodosReducer';

const TodoItem: React.FC<TodoItemProps> = ({ todo, handleDragging }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>): void => {
    const id: string & { _kind?: '' } = todo.id.toString();
    e.dataTransfer.setData('text', id);
    handleDragging(true);
  };

  const handleDragEnd = (): void => {
    handleDragging(false);
  };

  const dispatch = useDispatch();

  return (
    <div
      className='card-container'
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p>{todo.title}</p>
      <button
        title='Delete task'
        onClick={() => {
          dispatch(deleteTodoAction(todo.id));
        }}
      >
        &times;
      </button>
    </div>
  );
};

export default TodoItem;
