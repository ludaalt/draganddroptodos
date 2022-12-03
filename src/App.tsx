import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import MainPage from './pages/MainPage';
import TodoItemPage from './pages/TodoItemPage';
import Header from './components/Header';
import Modal from './components/Modal/Modal';

const App: React.FC = () => {
  const [isModalMode, setIsModalMode] = useState<boolean>(false);

  return (
    <div className='flex'>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/todos' />} />
          <Route
            path='/todos'
            element={
              <>
                <Header page='main' modalStateChanger={(state) => setIsModalMode(state)} />
                <MainPage />
                <Modal
                  isModalModeProp={isModalMode}
                  modalChanger={(state) => setIsModalMode(state)}
                />
              </>
            }
          />
          <Route
            path='/todos/:id'
            element={
              <>
                <Header page='todo' modalStateChanger={setIsModalMode} />
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
