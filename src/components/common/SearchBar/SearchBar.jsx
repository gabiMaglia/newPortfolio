import  './search-bar.css'
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
    
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
     
      <input
        id='proyects-search-bar'
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
     
    </div>
  );
};

export default SearchBar;