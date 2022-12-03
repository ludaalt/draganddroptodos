import React from 'react';

import { TitleProps } from '../types/types';

const Header: React.FC<TitleProps> = ({ page, modalStateChanger }) => {
  return (
    <header className='main-header'>
      {page === 'main' ? (
        <>
          <h1>Wow how many cases there 👀</h1>
          <button
            title='Add new task'
            className='header-button'
            onClick={() => modalStateChanger(true)}
          >
            {'\u002B'}
          </button>
        </>
      ) : (
        <h1>Other pages</h1>
      )}
    </header>
  );
};

export default Header;
