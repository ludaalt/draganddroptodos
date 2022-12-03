import React from 'react';

interface Props {
  filterData: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ filterData }) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    filterData((event.target as HTMLInputElement).value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type='text' onChange={handleChange} placeholder='Find task...' />
    </form>
  );
};

export default SearchBar;
