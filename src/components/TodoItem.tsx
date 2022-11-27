import React from 'react';
// import { data } from '../data';

import { TodoItemProps } from '../types/types';

const TodoItem: React.FC<TodoItemProps> = ({ todo, handleDragging }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>): void => {
    const id: string & { _kind?: '' } = todo.id.toString();
    e.dataTransfer.setData('text', id);
    handleDragging(true);
  };

  const handleDragEnd = (): void => handleDragging(false);

  return (
    <div className='card-container' draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <p>{todo.description}</p>
    </div>
  );
};

export default TodoItem;
