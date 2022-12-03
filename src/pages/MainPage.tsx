import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import DragAndDrop from '../components/DragAndDrop';
import SearchBar from '../components/SearchBar/SearchBar';
import { RootState } from '../store/store';
import { Todo } from '../types/types';

const MainPage: React.FC = () => {
  const [filteredTodos, setFilteredTodos] = useState<any>([]);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  const todos = useSelector((state: RootState) => state.todos.todos);

  const handleFiltering = (searchFieldValue: string): any => {
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
      <SearchBar filterData={handleFiltering} />
      <DragAndDrop filteredTodos={filteredTodos} isFiltering={isFiltering} />
    </>
  );
};

export default MainPage;
