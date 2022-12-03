import React from 'react';

import classes from './Modal.module.scss';
import InputFile from '../InputFile/InputFile';

interface Props {
  isModalModeProp: boolean;
  modalChanger: (b: boolean) => void;
}

const Modal: React.FC<Props> = ({ isModalModeProp, modalChanger }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return isModalModeProp ? (
    <div className={classes.modalWrap} onClick={() => modalChanger(false)}>
      <div className={classes.modalBody} onClick={(e) => e.stopPropagation()}>
        <header>Add new task</header>

        <form className={classes.modalForm} onSubmit={handleSubmit}>
          <div className={classes.formBlock}>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' autoComplete='off' />
          </div>

          <div className={classes.formBlock}>
            <label htmlFor='description'>Description:</label>
            <textarea
              id='description'
              name='description'
              defaultValue=' Enter task description...'
            ></textarea>
          </div>

          <div className={classes.formBlock}>
            <label htmlFor='deadline'>Deadline:</label>

            <input
              type='date'
              id='deadline'
              value={new Date().toLocaleDateString('en-CA')}
              onChange={() => console.log(1)}
            />
          </div>

          <div className={`${classes.formBlock}`}>
            <InputFile />
          </div>

          <button type='submit' className='button'>
            Add task
          </button>
        </form>

        <button className={classes.modalClose} onClick={() => console.log(123)}>
          &times;
        </button>
      </div>
    </div>
  ) : null;
};

export default Modal;
