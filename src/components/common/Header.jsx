import React, { useState } from 'react';
import { FaMoon } from "react-icons/fa";
// import { a } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <div className='w-full flex justify-between items-center px-4 py-5 sticky top-0 left-0 bg-[#111]'>
        <h1 className='text-[1.2rem] font-bold tracking-widest'>
          Crypto<span className='text-[#7C5DFA] pl-1'>.</span>
        </h1>
        <div className='hidden md:flex gap-7 items-center text-gray-500 font-[400]'>
          <a href="/watchlist" className='hover:text-white transition-colors'>
            WatchList
          </a>
          <a href="/compare" className='hover:text-white transition-colors'>
            Compare
          </a>
          <a href="/dashboard" className='hover:text-white transition-colors'>
            Dashboard
          </a>
          <button className='text-[#7C5DFA]'>
            <FaMoon />
          </button>
        </div>
        <button className='md:hidden text-[#7C5DFA]' onClick={() => setToggleNav(!toggleNav)}>
          {toggleNav ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>
      {/* mobile view */}
      <div className={`w-[200px] min-h-screen px-8 absolute top-0 pt-4 bg-gray-700 md:hidden flex flex-col space-y-5 transition-transform duration-500 ease-in-out ${toggleNav ? 'translate-x-0' : '-translate-x-full'}`}>
        <h1 className='text-[1.7rem] font-bold tracking-widest'>
          Crypto<span className='pl-1'>.</span>
        </h1>
        <a href="/watchlist" className='text-gray-200 hover:text-white transition-colors'>
          WatchList
        </a>
        <a href="/compare" className='text-gray-200 hover:text-white transition-colors'>
          Compare
        </a>
        <a href="/dashboard" className='text-gray-200 hover:text-white transition-colors'>
          Dashboard
        </a>
        <button className='text-[#7C5DFA]'>
          <FaMoon />
        </button>
      </div>
    </>
  );
}

export default Header;
