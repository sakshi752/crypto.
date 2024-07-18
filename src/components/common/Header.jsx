import { motion } from 'framer-motion';
import useTheme from '../../hooks/useTheme';
import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [colorTheme, setTheme] = useTheme();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkSide(!darkSide);
  };

  const transition = {
    type: "spring",
    stiffness: 200,
    damping: 10
  };

  return (
    <>
      <div className='w-full flex justify-between items-center px-4 md:px-12 py-3 sticky top-0 left-0 bg-[#111] z-50'>
        <Link to={'/'} className='text-[1.2rem] font-bold tracking-widest text-white'>
          Crypto<span className='text-[#7a4191] pl-1'>.</span>
        </Link>
        <div className='flex items-center gap-5'>
          <div>
            {colorTheme === 'light' ? (
              <motion.div
                className='cursor-pointer hidden md:block'
                onClick={toggleDarkMode}
                initial={{ scale: 0.6, rotate: 90 }}
                animate={{ scale: 1, rotate: 360, transition }}
                whileTap={{ scale: 0.9, rotate: 15 }}
                transition={{ duration: 0.5 }}
              >
                <FaMoon className='text-xl text-white' />
              </motion.div>
            ) : (
              <motion.div
                className='cursor-pointer hidden md:block'
                onClick={toggleDarkMode}
                whileTap={{ scale: 0.9, rotate: 15 }}
                initial={{ rotate: 45 }}
                animate={{ rotate: 360, transition }}
              >
                <FaSun className='text-xl text-white' />
              </motion.div>
            )}
          </div>

          <div className='hidden md:flex gap-7 items-center text-gray-100 font-[400]'>
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-[#7a4191] to-[#1E3A8A] text-white rounded-md hover:from-[#6d3791] hover:to-[#162e6a] transition-colors"
            >
              <Link to="/dashboard">
                Dashboard
              </Link>
            </motion.button>
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
        <div className='fixed top-0 left-0 right-0 bottom-0 inset-0 md:hidden bg-[#000005be] z-50' onClick={() => setToggleNav(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`fixed w-[200px] min-h-screen px-8 top-0 right-0 pt-4 dark:bg-gray-800 bg-gray-300 text-black dark:text-white md:hidden flex flex-col space-y-5 transition-transform duration-500 ease-in-out ${toggleNav ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-[#7a4191] to-[#1E3A8A] text-white rounded-md hover:from-[#6d3791] hover:to-[#162e6a] transition-colors"
            >
              <Link to="/dashboard">
                Dashboard
              </Link>
            </motion.button>
            <div>
              {colorTheme === 'light' ? (
                <motion.div
                  className='cursor-pointer'
                  onClick={toggleDarkMode}
                  
                >
                  <FaMoon className='text-xl' />
                </motion.div>
              ) : (
                <motion.div
                  className='cursor-pointer'
                  onClick={toggleDarkMode}
                >
                  <FaSun className='text-xl' />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
