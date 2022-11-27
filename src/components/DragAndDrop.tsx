import React, { useState } from 'react';

import { Status, Todo } from '../types/types';
import { data } from '../data';
import TodoList from './TodoList';

const TodoTable: Status[] = ['Queue', 'Development', 'Done'];

const DragAndDrop: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(data);

  const [isDragging, setIsDragging] = useState(false);

  const handleDragging = (dragging: boolean): void => setIsDragging(dragging);

  return (
    <div className='todos-container'>
      {TodoTable.map((item) => (
        <TodoList status={item} key={item} todos={todos} isDragging={isDragging} handleDragging={handleDragging} />
      ))}
    </div>
  );
};

export default DragAndDrop;
