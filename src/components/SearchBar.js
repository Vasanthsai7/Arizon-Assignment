// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search products..."
      className="mb-4 w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
    />
  );
};

export default SearchBar;
