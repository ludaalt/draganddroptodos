import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import MainPage from './pages/MainPage';
import TodoItemPage from './pages/TodoItemPage';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/todos' />} />
          <Route path='/todos' element={<MainPage />} />
          <Route path={'/todos/:id'} element={<TodoItemPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
