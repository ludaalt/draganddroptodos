import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import MainPage from './pages/MainPage';
import TodoItemPage from './pages/TodoItemPage';
import Title from './components/Title';

const App: React.FC = () => {
  return (
    <div className='flex'>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/todos' />} />
          <Route
            path='/todos'
            element={
              <>
                <Title page='main' />
                <MainPage />
              </>
            }
          />
          <Route
            path='/todos/:id'
            element={
              <>
                <Title page='todo' />
                <TodoItemPage />
              </>
            }
          />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
