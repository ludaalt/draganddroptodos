import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import classes from './Modal.module.scss';
import InputFile from '../InputFile/InputFile';
import { addTodoAction, updateTodoItemAction } from '../../store/updateTodosReducer';
import { getCurrentDate } from '../../services/getCurrentDate';

import { Todo } from '../../types/types';
import { RootState } from '../../store/store';

interface Props {
  isModalModeProp: boolean;
  modalChanger: (b: boolean) => void;
}

const Modal: React.FC<Props> = ({ isModalModeProp, modalChanger }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentState = useSelector((state: RootState) => state.todos.todos);
  const currentStateLength = currentState?.length;
  const todoItem = currentState?.find((item: Todo) => item.id === Number(id));

  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [taskDeadlineDate, setTaskDeadineDate] = useState<any>(
    new Date().toLocaleDateString('en-CA'),
  );
  const [taskPriority, setTaskPriority] = useState<string>(todoItem?.priority ?? 'low');
  const [taskFiles, setTaskFiles] = useState<any[]>([]);

  const updateFiles = (value: string): void => {
    setTaskFiles((state) => [value, ...state]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const todo: Todo = {
      id: (currentStateLength ?? 0) + 1,
      title: taskTitle,
      description: taskDescription,
      doneAt: taskDeadlineDate,
      priority: taskPriority,
      files: taskFiles,
    };

    if (todoItem) {
      updateTodoItemAction(todo);
      modalChanger(false);
      return;
    }

    dispatch(addTodoAction(todo));

    setTaskTitle('');
    setTaskDescription('');

    modalChanger(false);
  };

  return isModalModeProp ? (
    <div className={classes.modalWrap} onClick={() => modalChanger(false)}>
      <div className={classes.modalBody} onClick={(e) => e.stopPropagation()}>
        <header>{todoItem ? 'Correct this task' : ' Add new task'}</header>

        <form className={classes.modalForm} onSubmit={handleSubmit}>
          <div className={classes.formBlock}>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              id='title'
              autoComplete='off'
              value={todoItem?.title ?? taskTitle}
              onChange={(event) => setTaskTitle(event.target.value)}
            />
          </div>

          <div className={classes.formBlock}>
            <label htmlFor='description'>Description:</label>
            <textarea
              id='description'
              name='description'
              placeholder='Enter task description...'
              value={todoItem?.description ?? taskDescription}
              onChange={(event) => setTaskDescription(event.target.value)}
            ></textarea>
          </div>

          <div className={classes.formBlock}>
            <label htmlFor='deadline'>Deadline:</label>

            <input
              type='date'
              id='deadline'
              value={taskDeadlineDate}
              onChange={(event) => {
                const date = new Date(event.target.value);

                const day =
                  String(date.getDate()).length === 1
                    ? '0' + String(date.getDate())
                    : date.getDate();

                setTaskDeadineDate(`${date.getFullYear()}-${date.getMonth() + 1}-${day}`);
              }}
            />
          </div>

          <div className={classes.formBlock}>
            <label htmlFor='priority'>Priority:</label>

            <select
              name='priority'
              id='priority'
              onChange={(event) => setTaskPriority(event.target.value)}
            >
              <option value=''>Please choose a priority</option>
              <option value='low'>Low</option>
              <option value='medium'>Meduim</option>
              <option value='high'>High</option>
            </select>
          </div>

          <div className={`${classes.formBlock}`}>
            <InputFile updateFiles={(value) => updateFiles(value)} />
          </div>

          <button
            type='submit'
            className='button'
            style={{ fontWeight: 'bold', fontSize: 'large' }}
          >
            {todoItem ? 'Save' : ' Add task'}
          </button>
        </form>

        <button className={classes.modalClose} onClick={() => modalChanger(false)}>
          &times;
        </button>
      </div>
    </div>
  ) : null;
};

export default Modal;
