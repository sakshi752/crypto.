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
        className='flex items-center justify-center h-8 w-8 bg-gradient-to-r from-[#7a4191] to-[#1E3A8A] text-white rounded-full hover:from-[#6d3791] hover:to-[#162e6a] transition-colors '
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <MdKeyboardArrowLeft size={24} />
      </button>
      {pageNumbers.map(number => (
        <button
          key={number}
          className={`flex items-center justify-center h-8 w-8 rounded-full ${currentPage === number ? 'bg-gradient-to-r from-[#7a4191] to-[#1E3A8A] text-white rounded-full hover:from-[#6d3791] hover:to-[#162e6a] transition-colors ' : 'text-black hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700'}`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        className='flex items-center justify-center h-8 w-8 bg-gradient-to-r from-[#7a4191] to-[#1E3A8A] text-white rounded-full hover:from-[#6d3791] hover:to-[#162e6a] transition-colors '
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <MdKeyboardArrowRight size={24} />
      </button>
    </div>
  );
}

export default PaginationSection;
