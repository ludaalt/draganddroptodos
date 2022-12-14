import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import Modal from '../components/Modal/Modal';

import { RootState } from '../store/store';
import { Todo } from '../types/types';
import { getDateDiff } from '../services/getDateDiff';

const TodoItemPage: React.FC = () => {
  const [isModalMode, setIsModalMode] = useState<boolean>(false);

  const todos = useSelector((state: RootState) => state.todos.todos);
  const { id } = useParams();

  const todoItem = useMemo(() => todos?.find((item: Todo) => item.id === Number(id)), [todos, id]);

  if (todoItem)
    return (
      <>
        <Header page='todo' modalStateChanger={setIsModalMode} />

        <div
          style={{
            margin: '10px 40px',
          }}
        >
          <h2 style={{ textDecoration: 'underline', marginBottom: '20px' }}>{todoItem.title}</h2>
          <p style={{ marginBottom: '20px' }}>
            What needs to be done: <br /> {todoItem.description}
          </p>
          <p style={{ marginBottom: '20px' }}>
            Created at: <br /> {todoItem.createdAt}
          </p>
          <p style={{ marginBottom: '20px' }}>
            Working days: <br /> {todoItem.createdAt && getDateDiff(todoItem.createdAt)}
          </p>
          <p style={{ marginBottom: '20px' }}>
            Done at: <br />
            {todoItem.doneAt}
          </p>
          <p style={{ marginBottom: '20px' }}>
            Priority: <br /> {todoItem.priority}
          </p>
          <p style={{ marginBottom: '20px' }}>
            Status: <br /> {todoItem.status}
          </p>
          {todoItem.files && <p>Files: {todoItem.files}</p>}
        </div>
        <Modal isModalModeProp={isModalMode} modalChanger={(state) => setIsModalMode(state)} />
      </>
    );

  return null;
};

export default TodoItemPage;
