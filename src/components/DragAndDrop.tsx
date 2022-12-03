import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Todo, Status } from '../types/types';
import TodoList from './TodoList';

const TodoTable: Status[] = ['Queue', 'Development', 'Done'];

interface Props {
  filteredTodos: Todo[] | undefined;
  isFiltering: boolean;
}

const DragAndDrop: React.FC<Props> = ({ filteredTodos, isFiltering }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragging = (dragging: boolean): void => setIsDragging(dragging);

  return (
    <div className='todos-container'>
      {TodoTable.map((item) => (
        <TodoList
          isFiltering={isFiltering}
          filteredTodos={filteredTodos}
          status={item}
          key={item}
          isDragging={isDragging}
          handleDragging={handleDragging}
        />
      ))}
    </div>
  );
};

export default DragAndDrop;
