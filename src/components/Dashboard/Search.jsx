import React, { useState, useEffect } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = ({ search, handleSearch, suggestions }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (search) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [search]);

  const handleSuggestionClick = (suggestion) => {
    handleSearch({ target: { value: suggestion.name } });
    setShowSuggestions(false); // Hide suggestions after clicking
  };

  return (
    <div className='w-full sm:w-4/5 p-3 mx-auto flex flex-col items-center mt-10 relative'>
      <div className='flex items-center w-full relative'>
        <FaMagnifyingGlass className='text-gray-500 absolute left-4 md:left-6 text-2xl' />
        <input
          className='dark:bg-gray-800 bg-gray-300 w-full py-3 pl-12 pr-4 rounded-full text-black dark:text-white'
          type="text"
          placeholder='Search'
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      {showSuggestions && (
        <ul className='bg-gray-300 dark:bg-gray-800 w-full mt-2 rounded-lg shadow-lg max-h-60 overflow-auto'>
          {suggestions.length ? (
            suggestions.map((suggestion, index) => (
              <li
                key={index}
                className='p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white'
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.name}
              </li>
            ))
          ) : (
            <li className='p-2'>No suggestions found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
