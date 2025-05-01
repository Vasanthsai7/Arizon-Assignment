// src/components/FilterSort.js
import React from 'react';

const FilterSort = ({ onSort }) => {
  return (
    <div className="flex justify-end mb-4">
      <select onChange={(e) => onSort(e.target.value)} className="p-2 border rounded dark:bg-gray-800 dark:border-gray-600">
        <option value="">Sort by</option>
        <option value="asc">Price Low to High</option>
        <option value="desc">Price High to Low</option>
      </select>
    </div>
  );
};

export default FilterSort;
