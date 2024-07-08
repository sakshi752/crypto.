import useTheme from '../../hooks/useTheme';
import React, { useEffect, useRef, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [colorTheme, setTheme] = useTheme();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkSide(!darkSide);
  }

  return (
    <>
      <div className='w-full flex justify-between items-center px-12 py-3 sticky top-0 left-0 bg-[#111]'>
        <h1 className='text-[1.2rem] font-bold tracking-widest text-white'>
          Crypto<span className='text-[#7a4191] pl-1'>.</span>
        </h1>
        <div className='flex gap-5'>
          <button className='text-[#7a4191] hidden md:block' onClick={toggleDarkMode}>
            {colorTheme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
          <div className='hidden md:flex gap-7 items-center text-gray-100 font-[400]'>
            <a href='/watchlist' className='hover:text-white transition-colors'>
              WatchList
            </a>
            <a href='/compare' className='hover:text-white transition-colors'>
              Compare
            </a>
            <a
              href="/dashboard"
              className="inline-block px-4 py-2 bg-gradient-to-r from-[#7a4191] to-[#1E3A8A] text-white rounded-md hover:from-[#6d3791] hover:to-[#162e6a] transition-colors"
            >
              Dashboard
            </a>

          </div>

        </div>

        <button
          className='md:hidden text-white'
          onClick={() => setToggleNav(!toggleNav)}
        >
          {toggleNav ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>
      {toggleNav && (
        <div className='fixed top-0 left-0 right-0 bottom-0 inset-0 md:hidden bg-[#000005be]' onClick={() => setToggleNav(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`fixed w-[200px] min-h-screen px-8 top-0 right-0 pt-4 bg-[#2e2e2e] md:hidden flex flex-col space-y-5 transition-transform duration-500 ease-in-out ${toggleNav ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            
            <a href='/watchlist' className='text-gray-200 hover:text-white transition-colors'>
              WatchList
            </a>
            <a href='/compare' className='text-gray-200 hover:text-white transition-colors'>
              Compare
            </a>
            <a href='/dashboard' className='text-gray-200 hover:text-white transition-colors'>
              Dashboard
            </a>
            <button className='text-[#7C5DFA]' onClick={toggleDarkMode}>
              {colorTheme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
