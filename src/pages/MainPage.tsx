import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import Modal from '../components/Modal/Modal';

import DragAndDrop from '../components/DragAndDrop';
import SearchBar from '../components/SearchBar/SearchBar';
import { RootState } from '../store/store';
import { Todo } from '../types/types';

const MainPage: React.FC = () => {
  const [isModalMode, setIsModalMode] = useState<boolean>(false);

  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleFiltering = (searchFieldValue: string): void => {
    if (!searchFieldValue) {
      setIsFiltering(false);
    }

    const filteredAppData = todos?.filter((item) => {
      return item.title.toLowerCase().includes(searchFieldValue.toLowerCase());
    });

    if (filteredAppData) {
      setFilteredTodos(filteredAppData);
      setIsFiltering(true);
    }
  };

  return (
    <>
      <Header page='main' modalStateChanger={(state) => setIsModalMode(state)} />
      <SearchBar filterData={handleFiltering} />
      <DragAndDrop filteredTodos={filteredTodos} isFiltering={isFiltering} />

      <Modal isModalModeProp={isModalMode} modalChanger={(state) => setIsModalMode(state)} />
    </>
  );
};

export default MainPage;
