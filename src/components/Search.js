// src/components/Search.js
import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
    setQuery('');
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded-l-md"
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-blue-500 text-white rounded-r-md"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
