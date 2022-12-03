import React, { useState } from 'react';

import classes from './SearchBar.module.scss';

interface Props {
  filterData: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ filterData }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setSearchQuery((event.target as HTMLInputElement).value);
    filterData((event.target as HTMLInputElement).value);
  };

  return (
    <form onSubmit={onSubmit} className={classes.searchForm}>
      <input type='text' value={searchQuery} onChange={handleChange} placeholder='Find task...' />
    </form>
  );
};

export default SearchBar;
