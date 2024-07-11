import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = ({search,handleSearch}) => {
  return (
    <div className='w-full sm:w-4/5 p-3 mx-auto flex items-center mt-10 relative'>
      <FaMagnifyingGlass className='text-gray-500 absolute left-5 md:left-6 text-2xl' />
      <input
        className='dark:bg-gray-800 bg-gray-300 w-full py-3 pl-12 pr-4 rounded-full text-black dark:text-white'
        type="text"
        placeholder='Search'
        value={search}
        onChange={(e)=>handleSearch(e)}
      />
    </div>
  )
}

export default Search;
