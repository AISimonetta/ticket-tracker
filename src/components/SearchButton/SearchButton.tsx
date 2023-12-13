// Import necessary dependencies and styles
import  { useState } from 'react';
import './SearchButton.scss';
import team from '../../data/team';

type SearchButtonProps = {
filteredNames: string[]
};

const SearchButton = ({ filteredNames }: SearchButtonProps) => {
  const [searchName, setSearchName] = useState('');

  const handleSearch = () => {
    const filteredNames = team
      .filter((employee) =>
        employee.name.toLowerCase().includes(searchName.toUpperCase())
      )
      .map((employee) => employee.name);

    return filteredNames;
  };

  return (
        <div>
      <input
        placeholder="Enter name"
        value={searchName}
      />
      <button className="search__btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchButton;