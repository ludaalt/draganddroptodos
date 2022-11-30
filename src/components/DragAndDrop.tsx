import React, { useState } from 'react';

import { Status } from '../types/types';
import TodoList from './TodoList';

const TodoTable: Status[] = ['Queue', 'Development', 'Done'];

const DragAndDrop: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragging = (dragging: boolean): void => setIsDragging(dragging);

  return (
    <div className='todos-container'>
      {TodoTable.map((item) => (
        <TodoList status={item} key={item} isDragging={isDragging} handleDragging={handleDragging} />
      ))}
    </div>
  );
};

export default DragAndDrop;
