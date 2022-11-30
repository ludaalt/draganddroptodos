import React from 'react';
import { useDispatch } from 'react-redux';

import { TitleProps } from '../types/types';
import { createTodo } from '../store/updateTodosSlice';

const Header: React.FC<TitleProps> = ({ page, todo }) => {
  const dispatch = useDispatch();
  return (
    <header>
      {page === 'main' ? (
        <>
          <h1>Wow how many cases there 👀</h1>
          <button onClick={() => dispatch(createTodo(true))}>{'\u002B'}</button>
        </>
      ) : (
        <h1>Other pages</h1>
      )}
    </header>
  );
};

export default Header;
