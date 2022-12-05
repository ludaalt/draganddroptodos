import React from 'react';

import { TitleProps } from '../types/types';

const Header: React.FC<TitleProps> = ({ page, modalStateChanger }) => {
  return (
    <header className='main-header'>
      {page === 'main' ? (
        <>
          <h1>Wow how many cases here 👀</h1>
          <button
            title='Add new task'
            className='header-button'
            onClick={() => modalStateChanger(true)}
          >
            {'\u002B'}
          </button>
        </>
      ) : (
        <>
          <h1>Hmm what is the task here</h1>
          <button
            title='Correct this task'
            className='header-button'
            onClick={() => modalStateChanger(true)}
          >
            {'\u270E'}
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
