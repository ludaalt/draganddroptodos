import React from 'react';
import { Todo, Status } from '../types/types';

interface Props {
  todos: Todo[];
  status: Status;
}

const TodoList: React.FC<Props> = ({ todos, status }) => {
  return (
    <div className='todos'>
      <header>{status} tasks</header>
      {/* Todos */}
    </div>
  );
};

export default TodoList;
