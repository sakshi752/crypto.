import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const PaginationSection = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='flex items-center justify-center space-x-1 md:space-x-2 p-2 md:p-4'>
      <button
        className='flex items-center justify-center h-8 w-8 text-gray-500 hover:text-gray-700'
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <MdKeyboardArrowLeft size={24} />
      </button>
      {pageNumbers.map(number => (
        <button
          key={number}
          className={`flex items-center justify-center h-8 w-8 rounded-full ${currentPage === number ? 'bg-purple-600 text-white' : 'text-black hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700'}`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        className='flex items-center justify-center h-8 w-8 text-gray-500 hover:text-gray-700'
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <MdKeyboardArrowRight size={24} />
      </button>
    </div>
  );
}

export default PaginationSection;
